FROM postgres:14-alpine
USER postgres
# ENV POSTGRES_USER postgres
# ENV POSTGRES_PASSWORD Passw0rd!
# ENV POSTGRES_DB postgres
ADD db.sql /docker-entrypoint-initdb.d/
ADD script.sh /docker-entrypoint-initdb.d/
EXPOSE 5432