FROM node:onbuild
EXPOSE 8000

ENV API_BASE http://api.kingdom.rent

CMD ./node_modules/.bin/gulp build && npm start
