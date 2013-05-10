define(function (require, exports, module) {

  module.exports = Backbone.Model.extend({
    urlRoot: '/locations',
    idAttribute: '_id'
  });

});
