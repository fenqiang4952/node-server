var mongoose = require('mongoose');
// mongoose.Promise = global.Promise = require('bluebird');

var Schema = mongoose.Schema;

module.exports = function () {

  var UserSchema = new Schema({
    name: String,
    sex: Number
  },{
    versionKey: false
  })
  UserSchema.query.selectAll = function () {
    return this.find()
  }
  UserSchema.query.findById = function (id) {
    return this.find({_id:id})
  }

  var User = mongoose.model('User',UserSchema)
  return User
};