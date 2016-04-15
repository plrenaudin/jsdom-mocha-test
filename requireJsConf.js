var requirejs = require('requirejs');
requirejs.config({
  baseUrl: '.',
  paths: {
    'backbone': 'node_modules/backbone/backbone',
    'underscore': 'node_modules/underscore/underscore'
  }
});
module.exports = requirejs;