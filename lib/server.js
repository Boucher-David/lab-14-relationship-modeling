'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const sendMessage = require('./sendMessage.js');
require("dotenv").config();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/lab14', {useMongoClient: true});

app.use('/v1', require('../routes/routes.js'));

module.exports = app;