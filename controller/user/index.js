var common = require('../../common/')
var User = require('../../db/user/')()

exports.getUser = function (req,res) {
  var params = ['id']
  if(common.checkParams(req,params)){
    res.json({
      name: '890'
    })
  }else {
    throw new Error('参数错误！')
  }
}
exports.getUserAll = function (req,res) {
  var params = []
  if(common.checkParams(req,params)){
    User.find().selectAll().exec(function (err, users) {
      res.json({
        err:{
          code: 0
        },
        result: users
      })
    })
  }else {
    throw new Error('参数错误！')
  }
}
exports.addUser = function (req,res) {
  var params = ['name','sex']
  if(common.checkParams(req,params)){
    var UserEntity = new User({
      name: req.body.name,
      sex: req.body.sex
    })
    console.log(UserEntity);
    UserEntity.save(function(err) {
      if(err) {
        console.log(err);
        // throw new Error(err)
      }else {
        res.json({
          err: {
            msg: '成功',
            code: 1
          }
        })
      }
    })
    // promise.then()
    // promise.catch(function (err) {
      
    // })
  }else {
    throw new Error('参数错误！')
  }
}