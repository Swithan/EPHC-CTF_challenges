FROM node:lts-alpine as ui-build
WORKDIR /usr/src/app
COPY api_no_time/package*.json ./api_no_time/
RUN cd api_no_time && npm install
COPY api_no_time/ ./api_no_time/
WORKDIR /usr/src/app/api_no_time
RUN npm run build

FROM node:lts-alpine AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/api_no_time/dist ./api_no_time/dist
COPY server/package*.json ./server/
RUN cd server && npm install
COPY ./server/app.js ./server/

EXPOSE 3080

CMD ["node", "./server/app.js"]