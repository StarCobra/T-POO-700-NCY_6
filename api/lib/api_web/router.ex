defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api
    # get "/users", UserController, :index
    # get "/users/:id", UserController, :show
    # post "/users", UserController, :create
    # put "/users/:id", UserController, :update
    # delete "/users/:id", UserController, :delete
    # get "/clocks", ClockController, :index
    # get "/clocks/:id", ClockController, :show
    # post "/clocks", ClockController, :create
    # put "/clocks/:id", ClockController, :update
    # delete "/clocks/:id", ClockController, :delete
    # get "/workingtimes", WorkingtimeController, :index
    # get "/workingtimes/:id", WorkingtimeController, :show
    # post "/workingtimes", WorkingtimeController, :create
    # put "/workingtimes/:id", WorkingtimeController, :update
    # delete "/workingtimes/:id", WorkingtimeController, :delete
    get "/clocks/:id", ClockController, :show
    post "/clocks/:id", ClockController, :create
    get "/workingtimes/:userid", WorkingtimeController, :show
    get "/workingtimes/:userid/:id", WorkingtimeController, :getone
    post "/workingtimes/:id", WorkingtimeController, :create

    resources "/users", UserController, except: [:new, :edit]
    resources "/clocks", ClockController, except: [:new, :edit]
    resources "/workingtimes", WorkingtimeController, except: [:new, :edit]

  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
    end
  end
end
