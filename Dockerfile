FROM node
WORKDIR '/app'
COPY ./package.json ./
RUN npm install 
RUN npm install --dotenv-extended
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
