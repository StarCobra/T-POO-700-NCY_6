# Dockerfile pour l'API
FROM elixir:1.14.0

# Installez Hex
RUN mix local.hex --force

# Définissez le répertoire de travail
WORKDIR /api

# Copiez le code de l'API dans le conteneur
COPY . .

# Installez les dépendances
RUN mix deps.get

# Migration de la base de données
RUN mix ecto.migrate

# Exécutez la commande par défaut
CMD ["mix", "phx.server"]
