FROM node:latest

WORKDIR /project/app

RUN npx create-react-app myapp && \
    cd myapp && \
    npm install axios
    
RUN rm -rf /project/app/myapp/src && \
    mkdir /project/app/myapp/src

COPY src/ /project/app/myapp/src/

CMD sh -c "cd /project/app/myapp && npm start"