defmodule Api.Tables.User do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :username, :string
    field :email, :string
    field :password, :string
    field :salt, :string
    field :role, :string, default: "user"
    field :token, :string


    timestamps()
  end

  @allowed_roles ~w(admin manager user)

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :password, :role, :salt, :token])
    |> validate_required([:username, :email, :password, :role])
    |> unique_constraint(:email)
  end
end
