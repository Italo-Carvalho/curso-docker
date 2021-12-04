FROM mysql:5.7

ADD schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

VOLUME [ "/backup/" ]

ENV MYSQL_ALLOW_EMPTY_PASSWORD=True