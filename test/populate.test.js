'use strict';
require("dotenv").config();

const expect = require('expect');
const app = require('../lib/server.js');
const request = require('superagent');
const Wizard = require('../models/wizards.js')
const Film = require('../models/films.js');

const server = app.listen(3000);

describe('Testing Population of Wizards and Films', () => {
    let filmId = '';
    let wizardId = '';
    before(done => {
        Wizard.remove({});
        Film.remove({});
        done();
    });

    after(function(done){
        server.close();
        done();
    });

    it('Should create a new wizard using POST', function(done){
        request.post(`localhost:3000/v1/wizards`).send({name: 'Gandalf'}).then(response => {
            wizardId = response.body._id;
            expect(response.statusCode).toEqual(200);
            expect(response.body.name).toEqual('Gandalf');
            done();
        });
    });

    it('Should create a new film and associate our wizards ID to it', function(done){
        request.post('localhost:3000/v1/films').send({title: 'LOTR', Wizard: wizardId}).then(response => {
            expect(response.body.title).toEqual('LOTR');
            expect(response.body.Wizard[0]).toEqual(wizardId);
            filmId = response.body._id;
            done();
        });
    });

    it('Should populate our LOTR film with our Gandalf Wizard', function(done) {
        request.get(`localhost:3000/v1/populate/${filmId}`).then(res => {

            // the film we get back should have the same ID as the LOTR we created earlier
            expect(res.body._id).toEqual(filmId);

            // the film should contain a wizard in it's Wizards array that has the _id of our Gandalf Wizard
            expect(res.body.Wizard[0]._id).toEqual(wizardId);
            done();
        });
    });
});