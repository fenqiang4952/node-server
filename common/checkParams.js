var _ = require('lodash')

module.exports = function (req,params) {
  var _params = req.body?req.body:req.params;
  return _.size(_.pick(_params, params)) === _.size(params)
};