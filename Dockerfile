FROM node as builder
WORKDIR /app
COPY ./ /app/
RUN yarn install
RUN yarn build

FROM nginx:1.15 
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
