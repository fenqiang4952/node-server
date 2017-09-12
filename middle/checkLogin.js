var path = require("path")
var constant = require('../common/constant')

module.exports = function static_(req, res,next) {

  if(req.originalUrl.startsWith(constant.interfacePath)) {
    console.log('need check')
    next()
  }
}