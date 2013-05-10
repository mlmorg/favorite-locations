define(function (require, exports, module) {

  module.exports = Backbone.View.extend({
    template: 'locations/map',

    serialize: function () {
      return {
        title: this.model.get('name') || this.model.get('address'),
        hasAddress: !!this.model.get('name'),
        address: this.model.get('address')
      };
    },

    afterRender: function () {
      // Positioning
      var latlng = new google.maps.LatLng(this.model.get('lat'), this.model.get('lng'));

      // Create Map
      var opts = {
        center: latlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(this.$('#map')[0], opts);

      // Create Marker
      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
    }
  });

});
