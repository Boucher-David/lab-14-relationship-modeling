'use strict';

const mongoose = require('mongoose');
const Film = require('./films.js');

const Schema = mongoose.Schema;
const wizardSchema = new Schema({
    name: String,
});


const Wizard = module.exports = mongoose.model('Wizard', wizardSchema);