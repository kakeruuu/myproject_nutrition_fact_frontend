FROM node:latest

WORKDIR /project/app

RUN npx create-react-app myapp && \
    cd myapp && \
    npm install axios

CMD sh -c "cd /project/app/myapp && npm start"