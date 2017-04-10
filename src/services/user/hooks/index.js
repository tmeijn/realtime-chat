'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const authLocal = require('feathers-authentication-local').hooks;
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [],
  find: [
  ],
  get: [
  ],
  create: [
    authLocal.hashPassword()
  ],
  update: [
  ],
  patch: [
  ],
  remove: [
  ]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
