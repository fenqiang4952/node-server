var _ = require('lodash')

module.exports = function (req,params) {
  var _params = _.isEmpty(req.body)?req.query:req.body;
  return _.size(_.pick(_params, params)) === _.size(params)
};