var mongoose = require('mongoose');
// mongoose.Promise = global.Promise = require('bluebird');

var Schema = mongoose.Schema;

module.exports = function () {

  var UserSchema = new Schema({
    name: String,
    sex: Number
  })
  UserSchema.query.selectAll = function () {
    return this.find()
  }

  var User = mongoose.model('User',UserSchema)
  return User
};