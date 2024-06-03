FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

# Install dependencies including dev dependencies for build
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
