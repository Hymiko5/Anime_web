'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/api');
const session = require('express-session');
app.set('view engine', 'pug');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false }
}));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);


app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + process.env.PORT);
  });