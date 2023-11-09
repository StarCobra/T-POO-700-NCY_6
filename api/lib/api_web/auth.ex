defmodule ApiWeb.Auth do
  use Guardian, otp_app: :api

  def generate_token(user) do
    # Génère le token avec Guardian
    {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user, :api)
    jwt
  end

end
