defmodule Api.Tables.Clock do
  use Ecto.Schema
  import Ecto.Changeset
  alias Api.Table.User

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "clocks" do
    field :status, :boolean, default: false
    field :time, :utc_datetime

    belongs_to :user, Api.Tables.User

    timestamps()
  end

  @doc false
  def changeset(clock, attrs) do
    clock
    |> cast(attrs, [:time, :status, :user_id])
    |> validate_required([:time, :status, :user_id])
  end
end
