defmodule ApiWeb.WorkingtimeController do
  use ApiWeb, :controller

  alias Api.Tables
  alias Api.Tables.Workingtime

  action_fallback ApiWeb.FallbackController

  def index(conn, _params) do
    workingtimes = Tables.list_workingtimes()
    render(conn, "index.json", workingtimes: workingtimes)
  end

  def create(conn, %{"workingtime" => workingtime_params}) do
    with {:ok, %Workingtime{} = workingtime} <- Tables.create_workingtime(workingtime_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.workingtime_path(conn, :show, workingtime))
      |> render("show.json", workingtime: workingtime)
    end
  end

  def getone(conn, %{"userid" => userid, "id" => id}) do
    workingtime = Tables.get_workingtime_by_user_id_and_id(userid, id)
    render(conn, "show.json", workingtime: workingtime)
  end

  def show(conn, _params) do
    if Map.has_key?(_params, "start") and Map.has_key?(_params, "end") do
      userid = Map.get(_params, "userid")
      start = Map.get(_params, "start")
      endd = Map.get(_params, "end")
      getone_start_end(conn, userid, start, endd)
    end
    userid = Map.get(_params, "userid")
    workingtimes = Tables.get_workingtimes_by_userid!(userid)
    render(conn, "index.json", workingtimes: workingtimes)
  end

  def getone_start_end(conn, userid, start, endd) do
    workingtime = Tables.get_workingtime_by_user_id_and_start_and_end(userid, start, endd)
    render(conn, "show.json", workingtime: workingtime)
  end

  def update(conn, %{"id" => id, "workingtime" => workingtime_params}) do
    workingtime = Tables.get_workingtime!(id)

    with {:ok, %Workingtime{} = workingtime} <- Tables.update_workingtime(workingtime, workingtime_params) do
      render(conn, "show.json", workingtime: workingtime)
    end
  end

  def delete(conn, %{"id" => id}) do
    workingtime = Tables.get_workingtime!(id)

    with {:ok, %Workingtime{}} <- Tables.delete_workingtime(workingtime) do
      send_resp(conn, :no_content, "")
    end
  end
end
