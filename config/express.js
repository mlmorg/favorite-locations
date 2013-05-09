var express = require('express');

module.exports = function (app, config) {

  app.set('views', config.root + 'app/views');
  app.set('view engine', 'jade');

  app.use(express.compress());
  app.use(express.static(config.root + 'public'));
  app.use(express.json());
  app.use(express.methodOverride());
  app.use(app.router);

};
