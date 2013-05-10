define(function (require, exports, module) {

  module.exports = {
    Model: require('locations/model'),
    Collection: require('locations/collection'),
    Views: {
      List: require('locations/list-view'),
      Edit: require('locations/edit-view'),
      AddButton: require('locations/add-button-view'),
      Map: require('locations/map-view')
    }
  };

});
