FROM node:onbuild
EXPOSE 8000

CMD ./node_modules/.bin/gulp build && npm start
