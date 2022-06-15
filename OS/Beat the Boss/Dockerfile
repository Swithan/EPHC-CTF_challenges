FROM ubuntu:22.10

RUN apt-get update -y
RUN apt-get install -y python3 xinetd netcat nano
USER root
WORKDIR /root
COPY ./source.py ./source.py
RUN chmod +x source.py
COPY ./docker-entrypoint.sh ./
RUN chmod 777 docker-entrypoint.sh

WORKDIR /etc/xinetd.d/
COPY ./serverconfig ./

EXPOSE 9991

CMD ["/root/docker-entrypoint.sh"]