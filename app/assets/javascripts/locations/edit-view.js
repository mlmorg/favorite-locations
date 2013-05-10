define(function (require, exports, module) {

  var app = require('app');

  module.exports = Backbone.View.extend({
    template: 'locations/edit',

    events: {
      'change input[name="address"]': 'disable',
      'submit form': 'save',
      'click [data-action="delete"]': 'delete'
    },

    serialize: function () {
      return {
        title_text: this.model.isNew() ? 'Add New Location' : 'Edit Location',
        button_text: this.model.isNew() ? 'Add Location' : 'Save Location',
        can_delete: !this.model.isNew(),
        name: this.model.get('name'),
        address: this.model.get('address'),
        lat: this.model.get('lat'),
        lng: this.model.get('lng')
      };
    },
    
    afterRender: function () {
      var $address = this.$('input[name="address"]');

      // load the google autocomplete api
      var options = { types: ['geocode'] };
      this.autocomplete = new google.maps.places.Autocomplete($address[0], options);
      google.maps.event.addListener(this.autocomplete, 'place_changed', _.bind(this.setAddress, this));

      // focus on first input when we're dealing with a blank address
      if (this.model.isNew()) {
        $address.focus();
      }

      // when we're editing, make sure the form button is enabled by default
      else {
        this.enable();
      }
    },

    setAddress: function () {
      var place = this.autocomplete.getPlace();
      if (place.geometry) {
        // Add lat/lng to form fields
        this.$('#location-lat').val(place.geometry.location.kb);
        this.$('#location-lng').val(place.geometry.location.lb);

        // Enable form button
        this.enable();
      }
    },

    enable: function () {
      this.$('#location-submit').removeAttr('disabled');
    },

    disable: function () {
      this.$('#location-submit').attr('disabled', 'disabled');
    },

    save: function (e) {
      e.preventDefault();
      
      // get form data
      var data = app.serialize($(e.currentTarget));

      // save
      this.model.save(data, { success: function () {
        app.router.go('home');
      } });
    },

    delete: function () {
      this.model.destroy({ success: function () {
        app.router.go('home');
      } });
    }
  });

});
