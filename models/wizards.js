'use strict';

const mongoose = require('mongoose');

const wizardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    film: [{ type: Schema.Types.ObjectId, ref: 'Film' }]
});

const Wizard = module.exports = mongoose.model('Wizard', wizardSchema);