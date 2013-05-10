define(function (require, exports, module) {

  var Location = require('locations/model');

  module.exports = Backbone.Collection.extend({
    model: Location,
    url: '/locations'
  });

});
