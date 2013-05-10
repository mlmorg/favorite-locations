define(function (require, exports, module) {

  module.exports = Backbone.Model.extend({
    urlRoot: '/locations',
    idAttribute: '_id',

    toJSON: function () {
      var obj = Backbone.Model.prototype.toJSON.call(this);
      return _.omit(obj, ['_id', '__v']);
    }
  });

});
