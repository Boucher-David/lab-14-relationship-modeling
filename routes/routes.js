const express = require('express');
const jsonParser = require('body-parser').json();
const Wizard = require(`${__dirname}/../models/wizards.js`);
const Film = require('../models/films.js');
const sendMessage = require('../lib/sendMessage.js');

const Router = module.exports = express.Router();

Router.post('/wizards', jsonParser ,(req, res, next) => {
    const newWizard = new Wizard(req.body);
    newWizard.save().then(message => sendMessage(res, 200, 'Wizard saved to database.'))
    .catch(err => next({error: err}));
});

Router.get('/wizards/:id', (req, res, next) => {
    Wizard.findOne({_id: req.params.id})
    .then(wizard => res.send(wizard))
    .catch(err => next({error: err}));
});

Router.get('/wizards', (req, res) => {
    Wizard.find(req.query || {})
        .then(wizards => res.send('We got all the wizards correctly'))
        .catch(err => res.send('Nope'));
});

Router.put('/wizards/:id',jsonParser,  (req, res, next) => {
    if (typeof req.body['_id'] !== 'undefined') delete req.body._id;
    Wizard.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(data => res.send(data))
      .catch(err => next({error: err}));
});

Router.patch('/wizards/:id', jsonParser ,(req, res, next) => {
    if (typeof req.body._id !== 'undefined') delete req.body._id;
    Wizard.findOneAndUpdate({_id: req.params.id}, {$set: req.body}).then(data => res.send('Patched!')).catch(err => next({error: err}));
});

Router.delete('/wizards/:id', (req, res, next) => {
    Wizard.remove({_id: req.params.id}).then(res.send('Wizard Deleted!')).catch(err => next({error: err}));
});

Router.get('/films', (req, res) => {
    Film.find(req.query || {})
    .then(film => res.send(film))
    .catch(err => next({error: err}));
});

Router.get('/films/:id', (req, res) => {
    Film.findOne({_id: req.params.id})
    .then(wizard => res.send(wizard))
    .catch(err => next({error: err}));
});

Router.post('/films', jsonParser ,(req, res, next) => {
    const newFilm = new Film(req.body);
    newFilm.save().then(message => res.send(message))
    .catch(err => next({error: err}));
});

Router.put('/films/:id', jsonParser, (req, res) => {
    if (typeof req.body['_id'] !== 'undefined') delete req.body._id;
    Film.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(data => res.send(data))
      .catch(err => next({error: err}));
});

Router.delete('/films/:id', (req, res) => {
    Film.remove({_id: req.params.id})
    .then(res.send('Film Deleted!'))
    .catch(err => next({error: err}));
});

Router.patch('/films/:id', jsonParser, (req, res, next) => {
    if (typeof req.body._id !== 'undefined') delete req.body._id;
    Film.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
    .then(data => res.send('Patched!'))
    .catch(err => next({error: err})); 
});

Router.get('/populate/:wizard/:', (req, res) => {


    newWizard = new Wizard({name: 'Gandalf'});
    newWizard.save(function(err) {
        const newFilm = new Film({title: 'LOTR', Wizard: newWizard._id});
        newFilm.save(function(err) {
            Film.findOne({title: 'LOTR'}).populate('Wizard').exec((err, reply) => {
  
                res.send(err || reply);
            });
        });
    });

});

