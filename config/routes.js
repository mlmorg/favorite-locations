module.exports = function (app) {

  // API Routes
  var locations = require('../app/controllers/api/locations');
  app.get('/api/locations', locations.index);
  app.post('/api/locations', locations.create);
  app.get('/api/locations/:id', locations.show);
  app.put('/api/locations/:id', locations.update);
  app.del('/api/locations/:id', locations.destroy);

  // App Routes
  var home = require('../app/controllers/home');
  app.get('/', home.index);
  app.get('/add', home.index);
  app.get('/edit/:id', home.index);

};
