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

  def generate_token(user) do
    header = %{"alg" => "HS256", "typ" => "JWT"}
    claims = %{"sub" => user.id, "email" => user.email, "role" => user.role}

    secret_key = :crypto.strong_rand_bytes(32)
    secret_key_base64 = :base64.encode(secret_key)

    header_base64 = :base64.encode(Jason.encode!(header))
    claims_base64 = :base64.encode(Jason.encode!(claims))

    data = header_base64 <> "." <> claims_base64

    signature = :crypto.mac(:hmac, :sha256, secret_key, data)

    signature_base64 = :base64.encode(signature)

    "#{data}.#{signature_base64}"
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
      token = generate_token(user)

      conn
      # put in session

      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("usertoken.json", user: user, token: token)
    else
      conn
      |> put_status(:unauthorized)
      |> render("error.json", message: "Wrong password")
    end

  end

  def validate_token(token) do
    try do
      token = to_string(token)
      [header_base64, claims_base64, signature_base64] = String.split(token, ".")
      header = Jason.decode!(Base.decode64!(header_base64))
      claims = Jason.decode!(Base.decode64!(claims_base64))
      signature = Base.decode64!(signature_base64)

      user_id = Map.get(claims, "sub")

      case Tables.get_user_by_id(user_id) do
        %User{} = user ->
          # Utilisateur trouvé, tu peux effectuer d'autres vérifications si nécessaire
          {:ok, user}

        _ ->
          # Aucun utilisateur trouvé ou erreur, retourne :invalid_token
          {:error, :invalid_token}
      end
    rescue
      _ ->
        # Erreur de décodage du token, retourne :invalid_token
        {:error, :invalid_token}
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

    token = get_req_header(conn, "authorization")

    # Récupère l'utilisateur à partir du token
    case validate_token(token) do
      {:ok, user} when user.role == "admin" ->
        # L'utilisateur a un token valide et le rôle d'administrateur, continue avec la suppression

        # Récupère l'utilisateur à supprimer
        deleted_user = Tables.get_user!(id)

        Tables.delete_user(deleted_user)
        conn
        |> put_status(:ok)
        |> render("user_deleted.json", message: "User deleted")

      {:ok, _user} ->
        # L'utilisateur a un token valide, mais n'a pas le rôle d'administrateur
        conn
        |> put_status(:forbidden)
        |> render("error.json", message: "Permission denied")

      {:error, reason} ->
        # Le token est invalide
        conn
        |> put_status(:unauthorized)
        |> render("error.json", message: reason)
    end
  end
end
