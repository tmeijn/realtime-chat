'use strict';

const authentication = require('feathers-authentication');
const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');




module.exports = function() {
  const app = this;

  let config = app.get('auth');

  if(process.env.NODE_ENV === 'production') {
    config.secret = process.env.API_KEY;
  }
  

  
  app.configure(authentication(config));
  app.configure(local());
  app.configure(jwt());

  app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt', 'local'])
    ]
  }
});
};


