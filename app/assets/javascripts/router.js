define(function (require, exports, module) {

  var app = require('app');

  // Modules
  var Locations = require('locations/module');

  module.exports = Backbone.Router.extend({
    
    routes: {
      '': 'home'
    },

    home: function () {
      app.layout(new Locations.Views.List());
    }

  });

});
