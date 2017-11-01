'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Wizard = require('./wizards.js')

const filmSchema = new Schema({
    name: {type: String, required: true},
    wizards: [{ type: Schema.Types.ObjectId, ref: 'Wizard'}]
});



const Film = module.exports = mongoose.model('Film', filmSchema);