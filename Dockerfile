FROM node:18.12.0
fail&
WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "preview" ]