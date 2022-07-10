FROM mysql:8.0

COPY ./init_sql /docker-entrypoint-initdb.d

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
# TODO:mysqldの意味を調べる
CMD [ "mysqld" ]

