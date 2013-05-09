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
    }
  });

  module.exports = new App();

});
