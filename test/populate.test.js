'use strict';
require("dotenv").config();

const expect = require('expect');
const app = require('../lib/server.js');
const request = require('superagent');
const Wizard = require('../models/wizards.js')
const Film = require('../models/films.js');

const server = app.listen(3000);
const localURL = `localhost:${ 3000}/v1`;

describe('Testing Population of Wizards and Films', () => {
    before(done => {
        Wizard.remove({});
        Film.remove({});
        done();
    });

    after(done => {
        server.close();
        done();
    });

    it('Should create a new film using POST', done => {
        request.post(`localhost:3000/v1/films`).send({name: 'LOTR'}).then(response => {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    it('Should ping /films/populate/LOTR and populate the film with a wizards ID', done => {
        request.get(`localhost:3000/v1/films/populate/LOTR`, (err, res) => {
            
            expect(res.body.name).toEqual('LOTR');
            done();
        });
    });

});