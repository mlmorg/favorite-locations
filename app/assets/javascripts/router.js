define(function (require, exports, module) {

  var app = require('app');

  // Modules
  var Locations = require('locations/module');

  module.exports = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      'add': 'add',
      'edit/:_id': 'edit',
      'map/:_id': 'map'
    },

    home: function () {
      var collection = new Locations.Collection();
      var view = new Locations.Views.List({ collection: collection });
      var button = new Locations.Views.AddButton();
      collection.fetch({ success: function () {
        app.layout(view, { button: button });
      } });
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
    },

    map: function (params) {
      var model = new Locations.Model(params);
      var view = new Locations.Views.Map({ model: model });
      model.fetch({ success: function () {
        app.layout(view);
      } });
    }

  });

});
