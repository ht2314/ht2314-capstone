FROM node:18.12.0

RUN npm install

EXPOSE 80

CMD [ "npm run preview" ]