FROM node:latest

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /project/app
# npm install @mui/icons-material @mui/material @emotion/react @emotion/styledでのビルドは未テスト
RUN npx create-react-app myapp --template typescript && \
    cd myapp && \
    npm install axios && \
    npm install @mui/icons-material @mui/material @emotion/react @emotion/styled &&\
    npm install react-hook-form &&\
    yarn add -D ts-jest@^28.0.0 @types/jest@^28.0.0
    
RUN rm -rf /project/app/myapp/src && \
    mkdir /project/app/myapp/src

COPY src/ /project/app/myapp/src/

CMD sh -c "cd /project/app/myapp && npm start"