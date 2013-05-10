define(function (require, exports, module) {

  var app = require('app');

  // Modules
  var Locations = require('locations/module');

  module.exports = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'add': 'add',
      'edit/:_id': 'edit'
    },

    home: function () {
      app.layout(new Locations.Views.List());
    },

    add: function () {
      var model = new Locations.Model();
      var view = new Locations.Views.Edit({ model: model });
      app.layout(view);
    },
    
    edit: function (params) {
      var model = new Locations.Model(params);
      var view = new Locations.Views.Edit({ model: model });
      model.fetch({ success: function () {
        app.layout(view);
      } });
    }

  });

});
