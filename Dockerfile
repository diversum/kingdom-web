FROM node:onbuild
EXPOSE 8000

RUN ./node_modules/.bin/gulp build
