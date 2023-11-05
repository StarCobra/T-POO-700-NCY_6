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

  def create(conn, %{"user" => user_params}) do
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
    user = Tables.get_user!(id)

    with {:ok, %User{}} <- Tables.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
