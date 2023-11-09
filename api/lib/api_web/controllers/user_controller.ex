defmodule ApiWeb.UserController do
  use ApiWeb, :controller

  alias Api.Tables
  alias Api.Tables.User

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    # if there is email and username param
    if Map.has_key?(_params, "email") and Map.has_key?(_params, "username") do
      findByEmailAndUsername(conn, _params)
    end
    users = Tables.list_users()
    render(conn, "index.json", users: users)
  end

  def findByEmailAndUsername(conn, %{"email" => email, "username" => username}) do
    user = Tables.get_user_by_email_and_username(email, username)
    render(conn, "show.json", user: user)
  end

  def login(conn, params) do
    email = params["email"]
    password = params["password"]
    user = Tables.get_user_by_email(email)

    # Extract the binary from the {:ok, binary} tuple
    {_, salt_binary} = Base.decode64(user.salt)

    hashed_password = :crypto.hash(:sha256, password <> salt_binary)
    hashed_password_base64 = Base.encode64(hashed_password)

    if hashed_password_base64 == user.password do

      #generate token
      token = :crypto.strong_rand_bytes(16)
      token_base64 = Base.encode64(token)


      conn
      # put in session
      |> put_session(:token, token_base64)
      |> put_session(:email, email)
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("usertoken.json", user: user, token: token_base64)
    else
      conn
      |> put_status(:unauthorized)
      |> render("error.json", message: "Wrong password")
    end

  end

  def create(conn, %{"user" => user_params}) do
    salt = :crypto.strong_rand_bytes(16)
    salt_base64 = Base.encode64(salt)
    password = user_params["password"]
    hashed_password = :crypto.hash(:sha256, password <> salt)
    hashed_password_base64 = Base.encode64(hashed_password)
    user_params = Map.put(user_params, "password", hashed_password_base64)
    user_params = Map.put(user_params, "salt", salt_base64)



    with {:ok, %User{} = user} <- Tables.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end

  end

  def show(conn, %{"id" => id}) do
    user = Tables.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Tables.get_user!(id)

    with {:ok, %User{} = user} <- Tables.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

def delete(conn, %{"id" => id}) do
  token = get_session(conn, :token)
  email = get_session(conn, :email)

  authorization = get_req_header(conn, "authorization")

  # if token exist

  if token != authorization do
    conn
    |> put_status(:unauthorized)
    |> render("error.json", message: "You are not logged in")
  else
   checkrole = Tables.get_user_by_email(email)
    if checkrole.role == "admin" do
      user = Tables.get_user!(id)
      {:ok, _} = Tables.delete_user(user)
      conn
      |> put_status(:success)
      #render success message
      |> render("success.json", message: "User deleted")
    else
      conn
      |> put_status(:unauthorized)
      |> render("error.json", message: "You are not admin")
    end
  end

end
end
