# stage 1

FROM --platform=linux/amd64 node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=my-app-build /app/dist/airevents /usr/share/nginx/html
EXPOSE 80
