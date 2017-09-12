var mongoose = require('mongoose');
// mongoose.Promise = global.Promise = require('bluebird');
module.exports = function () {
  mongoose.connect('mongodb://localhost/test');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('数据库连接成功');
  });
};