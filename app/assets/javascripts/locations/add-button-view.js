define(function (require, exports, module) {

  var app = require('app');

  module.exports = Backbone.View.extend({
    tagName: 'button',
    
    initialize: function () {
      this.$el.attr('href', app.router.url('add'));
    },

    beforeRender: function () {
      this.$el.text('Add New Location');
    }
  });

});
