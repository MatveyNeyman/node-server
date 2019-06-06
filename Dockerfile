FROM node:10

ARG DB_HOST
ARG DB_PORT
ARG DB_NAME
ARG DB_USER
ARG DB_PASS

ENV PGHOST=$DB_HOST
ENV PGPORT=$DB_PORT
ENV PGDATABASE=$DB_NAME
ENV PGUSER=$DB_USER
ENV PGPASSWORD=$DB_PASS

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN chmod +x create_mail_user_SQL.sh
RUN chmod +x generate_password_hash.py

EXPOSE 8080
CMD [ "npm", "start" ]
