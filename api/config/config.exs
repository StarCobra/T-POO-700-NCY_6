# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :api,
  ecto_repos: [Api.Repo],
  generators: [binary_id: true]

# Configures the endpoint
config :api, ApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "tnEJpBp2QnE17WVJjHx662mZpLqROrXMt4mZb57FT1ZdwVUWpP4tUDI8GnAqGxtM",
  render_errors: [view: ApiWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Api.PubSub,
  live_view: [signing_salt: "2xMAcTFv"]

config :api, ApiWeb.Guardian,
  issuer: "ApiWeb",
  secret_key: "tnEJpBp2QnE17WVJjHx662mZpLqROrXMt4mZb57FT1ZdwVUWpP4tUDI8GnAqGxtM"


# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
