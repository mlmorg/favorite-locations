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
      if (!this.collection.length) {
        return this.$el.append('<p>You currently have no favorite locations</p>');
      }

      this.collection.each(function (model) {
        var view = new Item({ model: model, tagName: 'li' });
        this.insertView(view);
      }, this);
    }
  });

});
