FROM nginx:1.17.7-alpine
#force remove all the files from html folder of the nginx server
RUN rm -rf /usr/share/nginx/html/*
#copy the dist folders contents
COPY /dist/angular-app1/ usr/share/nginx/html
#start ur nginx server
CMD ["nginx","-g","daemon off;"]