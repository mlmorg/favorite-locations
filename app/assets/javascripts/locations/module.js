define(function (require, exports, module) {

  module.exports = {
    Model: require('locations/model'),
    Views: {
      List: require('locations/list-view'),
      Edit: require('locations/edit-view')
    }
  };

});
