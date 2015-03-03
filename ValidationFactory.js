require('object.assign').shim();
var _ = require('lodash');
var ValidationStrategy = require('./JoiValidationStrategy');

var ValidationFactory = Object.assign({
  getValidationMessages: function(errors, key) {
    errors = errors || {};
    if (_.isEmpty(errors)) {
      return [];
    } else {
      if (key === undefined) {
        return _.flatten(Object.keys(errors).map(function(error) {
          return errors[error] || [];
        }));
      } else {
        return errors[key] || [];
      }
    }
  },

  isValid: function(errors, key) {
    return _.isEmpty(this.getValidationMessages(errors, key));
  },

}, ValidationStrategy);

module.exports = ValidationFactory;
