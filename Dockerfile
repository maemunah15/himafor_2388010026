# os
FROM nginx:alpine

#PORT
EXPOSE 80

#Copy files
COPY index.html /usr/share/nginx/html
