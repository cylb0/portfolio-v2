FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm ci

# Variables lues par Vite au moment du build et inlinees dans le bundle.
#
# Les args du docker-compose.yml ne suffisent pas : un build arg n'existe dans
# le Dockerfile que s'il y est declare. Sans ces ARG, Docker recoit les valeurs
# et les ignore, et import.meta.env.VITE_EMAILJS_* est compile en undefined.
# .env ne comble pas le trou, il est dans .dockerignore.
#
# ARG suffit, pas besoin de ENV : les build args sont exposes dans
# l'environnement des instructions RUN, donc dans process.env que Vite lit.
# Declares apres npm ci pour ne pas invalider le cache de cette couche.
ARG VITE_EMAILJS_SERVICE
ARG VITE_EMAILJS_TEMPLATE
ARG VITE_EMAILJS_KEY

# Echouer ici plutot que de livrer un formulaire de contact silencieusement
# casse : sans valeurs, Vite compile import.meta.env.* en undefined et l'appel
# emailjs.send() part avec des identifiants vides sans que rien ne le signale.
RUN for v in VITE_EMAILJS_SERVICE VITE_EMAILJS_TEMPLATE VITE_EMAILJS_KEY; do \
        eval "val=\$$v"; \
        if [ -z "$val" ]; then \
            echo "ERREUR: build arg $v vide ou absent." >&2; \
            echo "Verifier que le .env est present a cote du docker-compose.yml." >&2; \
            exit 1; \
        fi; \
    done

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]