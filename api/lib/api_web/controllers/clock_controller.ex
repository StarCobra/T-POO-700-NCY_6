defmodule ApiWeb.ClockController do
  use ApiWeb, :controller

  alias Api.Tables
  alias Api.Tables.Clock

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    clocks = Tables.list_clocks()
    render(conn, "index.json", clocks: clocks)
  end

  def create(conn, %{"clock" => clock_params}) do
    with {:ok, %Clock{} = clock} <- Tables.create_clock(clock_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.clock_path(conn, :show, clock))
      |> render("show.json", clock: clock)
    end
  end

  def show(conn, %{"id" => userID}) do

    clocks = Tables.getClockByUserID(userID)
    render(conn, "index.json", clocks: clocks)
  end

  def update(conn, %{"id" => id, "clock" => clock_params}) do
    clock = Tables.get_clock!(id)

    with {:ok, %Clock{} = clock} <- Tables.update_clock(clock, clock_params) do
      render(conn, "show.json", clock: clock)
    end
  end

  def delete(conn, %{"id" => id}) do
    clock = Tables.get_clock!(id)

    with {:ok, %Clock{}} <- Tables.delete_clock(clock) do
      send_resp(conn, :no_content, "")
    end
  end
end
