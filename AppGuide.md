# Lab 14 Guide

Create a .env file with the variable PORT=#### with your custom code, otherwise it will default to 3000.

npm start => Gets the server up and running

npm run db => Run this in another terminal to get mongdb running and pointing to a local /db folder

Send requests to a base URL of localhost:PORT/v1 followed by /Wizards for the wizards router, and /films for the films router. Both work exactly the same for all CRUD operations.