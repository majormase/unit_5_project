const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res)=>{
  console.log(req.body);
    req.body.createPassword = bcrypt.hashSync(req.body.createPassword, bcrypt.genSaltSync(10));
    User.create({username: req.body.createUsername, password: req.body.createPassword}, (err, createdUser)=>{
      console.log(err);
      console.log(createdUser);
        res.status(201).json({
          username: createdUser.createUsername,
          status: 201,
          message: 'user created'
        });
    });
});

module.exports = router;
