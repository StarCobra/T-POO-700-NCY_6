defmodule Api.Tables.Workingtime do
  use Ecto.Schema
  import Ecto.Changeset
  alias Api.Table.User

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "workingtimes" do
    field :start, :utc_datetime
    field :end, :utc_datetime

    belongs_to :user, Api.Tables.User

    timestamps()
  end

  @doc false
  def changeset(workingtime, attrs) do
    workingtime
    |> cast(attrs, [:start, :end, :user_id])
    |> validate_required([:start, :end, :user_id])
  end
end
