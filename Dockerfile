

FROM node:10



# Create a directory where our app will be placed

RUN mkdir -p /app



# Change directory so that our commands run inside this new directory

WORKDIR /app



# Copy dependency definitions

COPY package*.json /app/



# Install dependecies

RUN npm install



# Get all the code needed to run the app

COPY . /app/



# Expose the port the app runs in

EXPOSE 4200



# Serve the app
CMD ["ng", "serve", "--host", "mueoz30332dns.eastus2.cloudapp.azure.com","--disable-host-check"]
