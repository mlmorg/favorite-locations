define(function (require, exports, module) {

  var app = require('app');

  module.exports = Backbone.View.extend({
    template: 'locations/item',
    mapSize: 150,

    serialize: function () {
      return {
        title: this.model.get('name') || this.model.get('address'),
        hasAddress: !!this.model.get('name'),
        address: this.model.get('address'),
        mapUrl: this.createMapUrl(),
        mapSize: this.mapSize,
        editUrl: app.router.url('edit', { _id: this.model.get('_id') })
      }
    },

    createMapUrl: function () {
      var opts = {
        size: this.mapSize + 'x' + this.mapSize,
        center: this.model.get('lat') + ',' + this.model.get('lng'),
        zoom: 16,
        sensor: false,
        markers: 'color:blue|' + this.model.get('lat') + ',' + this.model.get('lng')
      };
      return 'http://maps.googleapis.com/maps/api/staticmap?' + $.param(opts);
    }
  });

});
