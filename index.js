"use strict";
var http = require('http');
const express = require('express')
const app = express()
var server = http.createServer(app);
var session = require('express-session')
var auth = require('./passport');
var passport = auth.passport;

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize()); 
app.use(passport.session()); 
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.use('/', express.static('pages'));
//app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port hoge!'))
server.listen(3000);
