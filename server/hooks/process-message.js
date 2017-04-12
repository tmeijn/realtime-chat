'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const user = hook.params.user;

    const text = hook.data.text
      .substring(0, 400)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');


    // Override the original data

    hook.data = {
      text,
      userId: user._id
    };

    return Promise.resolve(hook);
  };
};
