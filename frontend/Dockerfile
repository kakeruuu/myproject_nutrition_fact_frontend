FROM node:latest

WORKDIR /project/src

RUN npx create-react-app myapp \
    cd myapp \
    npm add axios

WORKDIR /project/src/myapp

CMD [ "npm", "start"]