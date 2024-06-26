defmodule ApiWeb.UserView do
  use ApiWeb, :view
  alias ApiWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,}
  end

  def render("usertoken.json", %{user: user, token: token}) do
    %{id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: token}
  end

  def render("error.json", %{message: message}) do
    %{errors: %{message: message}}
  end

  def render("success.json", %{message: message}) do
    %{data: %{message: message}}
  end

  def render("user_deleted.json", %{message: message}) do
    %{data: %{message: message}}

  end
end
