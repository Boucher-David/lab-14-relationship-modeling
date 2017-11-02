'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Wizard = require('./wizards.js')

var filmSchema = Schema({
    title: String,
    Wizard: [{ type: Schema.Types.ObjectId, ref: 'Wizard' }]
  });


const Film = module.exports = mongoose.model('Film', filmSchema);