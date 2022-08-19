FROM node:latest

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /project/app
# npm install @mui/icons-material @mui/material @emotion/react @emotion/styledでのビルドは未テスト
RUN npx create-react-app myapp && \
    cd myapp && \
    npm install axios && \
    npm install @mui/icons-material @mui/material @emotion/react @emotion/styled
    
RUN rm -rf /project/app/myapp/src && \
    mkdir /project/app/myapp/src

COPY src/ /project/app/myapp/src/

CMD sh -c "cd /project/app/myapp && npm start"