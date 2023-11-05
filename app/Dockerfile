# Utilisez une image Node.js comme base
FROM node:latest as dev

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le code du front-end dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Exécutez la commande pour construire le front-end
RUN npm run build

# Exécutez la commande par NGINX
FROM nginx:stable-alpine as prod

# Copie des fichiers
COPY --from=dev /app/dist /usr/share/nginx/html

# Exposez le port 80
EXPOSE 80

# Exécutez la commande par défaut
CMD ["nginx", "-g", "daemon off;"]