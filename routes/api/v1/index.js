const express = require('express');
const todoRoute = require('./todo');
const userRoute = require('./users');
const passport = require('passport');

const router = express.Router();

module.exports = (params) => {
  router.use('/todo', passport.authenticate('jwt', { session: false }), todoRoute(params));
  router.use('/users', userRoute(params));
  return router;
};
