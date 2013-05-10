define(function (require, exports, module) {

  // Vendor dependencies
  require('jquery');
  require('underscore');
  require('backbone');
  require('layoutmanager');
  require('canal');

  // Configure LayoutManager
  Backbone.Layout.configure({
    manage: true,
    fetch: function (path) {
      return JST[path];
    }
  });

  // Configure jQuery Ajax
  $.ajaxPrefilter(function (options, originalOpts, xhr) {
    // Add /api prefix to API requests
    if (!options.non_api) {
      options.url = '/api' + (options.url || '');
    }
  });

  // App view
  var App = Backbone.View.extend({
    el: '#container',

    events: {
      'click [href]': 'navigate'
    },

    navigate: function (e) {
      var el = $(e.currentTarget);
      var url = el.attr('href');
      if (el.is('[data-bypass]')) {
        window.location.href = url;
      } else {
        this.router.navigate(url, true);
      }
    },

    layout: function (view) {
      return this.setView('main', view).render();
    },

    serialize: function ($el) {
      // quick and dirty form serialization
      var obj = {};
      _.each($el.serializeArray(), function (data) {
        obj[data.name] = data.value;
      });
      return obj;
    }
  });

  module.exports = new App();

});
