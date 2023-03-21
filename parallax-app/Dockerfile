FROM node:19.2-alpine3.16
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5173
CMD [ "npm", "run", "dev" ]