'use strict';

const mongoose = require('mongoose');
const Film = require('./films.js');

const Schema = mongoose.Schema;
const wizardSchema = new Schema({
    name: {type: String},
    films: {
        type: Schema.Types.ObjectId,
        ref: 'Film'   
    }
});


const Wizard = module.exports = mongoose.model('Wizard', wizardSchema);