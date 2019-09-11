//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const session = require('express-session');
const dotenv = require('dotenv');
const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;


dotenv.config();
console.log(dotenv);

app.use(express.json());

app.use(session({
  secret: 'kant',
  resave: false,
  saveUninitialized: false
}));
// app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const PROJECT5_DB = process.env.PROJECT5_DB

const citiesController = require('./controllers/sounds.js');
app.use('/sounds', citiesController);
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
// Error / success
mongoose.connect(PROJECT5_DB, {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT5_DB));
db.on('disconnected', () => console.log('mongo disconnected'));
app.listen(PORT, () => {
  console.log('listening');
})
