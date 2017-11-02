# Lab 14 Guide

Create a .env file with the variable PORT=#### with your custom code, otherwise it will default to 3000.

npm start => Gets the server up and running

npm run db => Run this in another terminal to get mongdb running and pointing to a local /db folder

Create a film by doing a POST request to localhost:3000/v1/films, with the body {title: "title"}

To associate a film with a wizard in order to populate, send a GET request to localhost:3000/v1/associate/:yourFilm/:yourWizard

Your film will contain a Wizard: [] object with the ID of your associated Wizard. To populate them, run another GET request to localhost:3000/v1/populate/:yourFilmsID. It will populate that Wizard object with the Wizard's full object and return the whole thing to you for viewing pleasure.