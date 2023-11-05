defmodule Api.TablesTest do
  use Api.DataCase

  alias Api.Tables

  describe "users" do
    alias Api.Tables.User

    @valid_attrs %{username: "some username", email: "some email"}
    @update_attrs %{username: "some updated username", email: "some updated email"}
    @invalid_attrs %{username: nil, email: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tables.create_user()

      user
    end

    test "list_users/0 returns all users" do
      user = user_fixture()
      assert Tables.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = user_fixture()
      assert Tables.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Tables.create_user(@valid_attrs)
      assert user.username == "some username"
      assert user.email == "some email"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tables.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = user_fixture()
      assert {:ok, %User{} = user} = Tables.update_user(user, @update_attrs)
      assert user.username == "some updated username"
      assert user.email == "some updated email"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = user_fixture()
      assert {:error, %Ecto.Changeset{}} = Tables.update_user(user, @invalid_attrs)
      assert user == Tables.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = user_fixture()
      assert {:ok, %User{}} = Tables.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Tables.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = user_fixture()
      assert %Ecto.Changeset{} = Tables.change_user(user)
    end
  end

  describe "clocks" do
    alias Api.Tables.Clock

    @valid_attrs %{status: true, time: ~D[2010-04-17]}
    @update_attrs %{status: false, time: ~D[2011-05-18]}
    @invalid_attrs %{status: nil, time: nil}

    def clock_fixture(attrs \\ %{}) do
      {:ok, clock} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tables.create_clock()

      clock
    end

    test "list_clocks/0 returns all clocks" do
      clock = clock_fixture()
      assert Tables.list_clocks() == [clock]
    end

    test "get_clock!/1 returns the clock with given id" do
      clock = clock_fixture()
      assert Tables.get_clock!(clock.id) == clock
    end

    test "create_clock/1 with valid data creates a clock" do
      assert {:ok, %Clock{} = clock} = Tables.create_clock(@valid_attrs)
      assert clock.status == true
      assert clock.time == ~D[2010-04-17]
    end

    test "create_clock/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tables.create_clock(@invalid_attrs)
    end

    test "update_clock/2 with valid data updates the clock" do
      clock = clock_fixture()
      assert {:ok, %Clock{} = clock} = Tables.update_clock(clock, @update_attrs)
      assert clock.status == false
      assert clock.time == ~D[2011-05-18]
    end

    test "update_clock/2 with invalid data returns error changeset" do
      clock = clock_fixture()
      assert {:error, %Ecto.Changeset{}} = Tables.update_clock(clock, @invalid_attrs)
      assert clock == Tables.get_clock!(clock.id)
    end

    test "delete_clock/1 deletes the clock" do
      clock = clock_fixture()
      assert {:ok, %Clock{}} = Tables.delete_clock(clock)
      assert_raise Ecto.NoResultsError, fn -> Tables.get_clock!(clock.id) end
    end

    test "change_clock/1 returns a clock changeset" do
      clock = clock_fixture()
      assert %Ecto.Changeset{} = Tables.change_clock(clock)
    end
  end

  describe "workingtimes" do
    alias Api.Tables.Workingtime

    @valid_attrs %{start: ~D[2010-04-17], end: ~D[2010-04-17]}
    @update_attrs %{start: ~D[2011-05-18], end: ~D[2011-05-18]}
    @invalid_attrs %{start: nil, end: nil}

    def workingtime_fixture(attrs \\ %{}) do
      {:ok, workingtime} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Tables.create_workingtime()

      workingtime
    end

    test "list_workingtimes/0 returns all workingtimes" do
      workingtime = workingtime_fixture()
      assert Tables.list_workingtimes() == [workingtime]
    end

    test "get_workingtime!/1 returns the workingtime with given id" do
      workingtime = workingtime_fixture()
      assert Tables.get_workingtime!(workingtime.id) == workingtime
    end

    test "create_workingtime/1 with valid data creates a workingtime" do
      assert {:ok, %Workingtime{} = workingtime} = Tables.create_workingtime(@valid_attrs)
      assert workingtime.start == ~D[2010-04-17]
      assert workingtime.end == ~D[2010-04-17]
    end

    test "create_workingtime/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Tables.create_workingtime(@invalid_attrs)
    end

    test "update_workingtime/2 with valid data updates the workingtime" do
      workingtime = workingtime_fixture()
      assert {:ok, %Workingtime{} = workingtime} = Tables.update_workingtime(workingtime, @update_attrs)
      assert workingtime.start == ~D[2011-05-18]
      assert workingtime.end == ~D[2011-05-18]
    end

    test "update_workingtime/2 with invalid data returns error changeset" do
      workingtime = workingtime_fixture()
      assert {:error, %Ecto.Changeset{}} = Tables.update_workingtime(workingtime, @invalid_attrs)
      assert workingtime == Tables.get_workingtime!(workingtime.id)
    end

    test "delete_workingtime/1 deletes the workingtime" do
      workingtime = workingtime_fixture()
      assert {:ok, %Workingtime{}} = Tables.delete_workingtime(workingtime)
      assert_raise Ecto.NoResultsError, fn -> Tables.get_workingtime!(workingtime.id) end
    end

    test "change_workingtime/1 returns a workingtime changeset" do
      workingtime = workingtime_fixture()
      assert %Ecto.Changeset{} = Tables.change_workingtime(workingtime)
    end
  end
end
