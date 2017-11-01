'use strict';
require("dotenv").config();

const expect = require('expect');
const app = require('../lib/server.js');
const request = require('superagent');
const Wizard = require('../models/wizards.js')
const Film = require('../models/films.js');

const server = app.listen(process.env.PORT || 3000);
const localURL = `localhost:${process.env.PORT || 3000}/v1`;

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

});