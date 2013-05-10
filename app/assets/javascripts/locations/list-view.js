define(function (require, exports, module) {

  var Item = require('locations/item');

  module.exports = Backbone.View.extend({
    tagName: 'ul',
    id: 'locations',
    template: 'locations/list',

    serialize: function () {
      return { title: 'My Locations' };
    },

    beforeRender: function () {
      this.collection.each(function (model) {
        var view = new Item({ model: model, tagName: 'li' });
        this.insertView(view);
      }, this);
    },

    afterRender: function () {
      if (!this.collection.length) {
        this.$el.append('<p>You currently have no favorite locations.</p>');
      }
    }
  });

});
