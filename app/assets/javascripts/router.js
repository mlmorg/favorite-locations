define(function (require, exports, module) {

  var app = require('app');

  // Modules
  var Locations = require('locations/module');

  module.exports = Backbone.Router.extend({
    
    routes: {
      '': 'home'
    },

    home: function () {
      var view = new Locations.Views.List();
      app.insertView(view).render();
    }

  });

});
