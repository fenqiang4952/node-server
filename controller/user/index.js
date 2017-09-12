const _ = require('lodash')

var common = require('../../common/')
var User = require('../../db/user/')()

exports.getUser = function (req,res) {
  var params = ['id']
  if(common.checkParams(req,params)){
    User.find().findById(req.query.id).exec(function (err,user) {
      res.json(_.assign(common.units.normalResult, {
        result: user
      }))
    })
  }else {
    throw new Error('参数错误！')
  }
}
exports.getUserAll = function (req,res) {
  var params = []
  if(common.checkParams(req,params)){
    User.find().selectAll().exec(function (err, users) {
      res.json(_.assign(common.units.normalResult,{
        result: users
      }))
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
    UserEntity.save(function(err) {
      if(err) {
        console.log(err);
        // throw new Error(err)
      }else {
        res.json(common.units.normalResult)
      }
    })
  }else {
    throw new Error('参数错误！')
  }
}
exports.delUser = function (req,res) {
  var params = ['id']
  if(common.checkParams(req,params)){
    User.deleteOne({_id: req.body.id},function (err) {
      if(err) {
        throw new Error('删除错误')
      }else {
        res.json(common.units.normalResult)
      }
    })
  }else {
    throw new Error('参数错误！')
  }
}
exports.updateUser = function (req,res) {
  var params = ['id','name','sex']
  if(common.checkParams(req,params)){
    User.findOne({_id:req.body.id},function (err,user) {
      if(err) {
        throw new Error('修改的用户不存在')
      }else {
        user = _.assign(user,req.body)
        user.save(function (err) {
          res.json(_.assign(common.units.normalResult,{
            result: user
          }))
        })
      }
    })
  }else {
    throw new Error('参数错误！')
  }
}
