FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/ .

COPY startFrontend.sh /usr/bin/startFrontend.sh

ENTRYPOINT ["/usr/bin/startFrontend.sh"]
