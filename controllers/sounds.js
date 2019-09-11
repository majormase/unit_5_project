// ================
//    Dependencies
// ================
const express = require('express');
const router = express.Router();
const Cities = require('../models/cities.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// ================
//    Routes
// ================
// Index route
router.get('/', (req, res) => {
  Sounds.find({}, (err, foundSounds) => {
    res.json(foundSounds);
  });
});
// Create Route
router.post('/', (req, res) => {
  Sounds.create(req.body, (err, addedSound) => {
    res.json(addedSound);
  });
});
// Delete Route
router.delete('/:id', (req, res) => {
  Sounds.findByIdAndRemove(req.params.id, (err, deletedSound) => {
    res.json(deletedSound);
  });
});
//  Edit Route
router.put('/:id', (req, res) => {
  Sounds.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSound) => {
    res.json(updatedSound);
  });
});

module.exports = router;
