var controllers = require('../../controller/')

exports.getUser = {
  path: 'getUser',
  type: 'POST',
  func: function (req,res) {
    controllers.user.getUser(req,res)
  } 
}
exports.getUserAll = {
  path: 'getUserAll',
  func: function (req,res) {
    controllers.user.getUserAll(req,res)
  }
};
exports.addUser = {
  path: 'addUser',
  type: 'POST',
  func: function (req,res) {
    controllers.user.addUser(req,res)
  }
};