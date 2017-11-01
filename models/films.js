'use strict';

const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    name: {type: String, required: true},
    wizards: [{ type: Schema.Types.ObjectId, ref: 'Wizard' }]
});

const Film = module.exports = mongoose.model('Film', filmSchema);