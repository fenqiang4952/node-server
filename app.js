var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer();
var db = require('./db/config')

var staticMiddle = require('./middle/static')
var checkLoginMiddle = require('./middle/checkLogin')
var constant = require('./common/constant')
var routers = require('./router')

var app = express();

db();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

router.use(staticMiddle);
router.use(checkLoginMiddle);

for (var key in routers) {
  if (routers.hasOwnProperty(key)) {
    var routersChild = routers[key];
    for (var key_ in routersChild) {
      if (routersChild.hasOwnProperty(key_)) {
        var item = routersChild[key_];
        if(item.type === 'POST') {
          router.post(constant.interfacePath+item.path, upload.array(),item.func);
        }else {
          router.all(constant.interfacePath+item.path,item.func);
        }
      }
    }
  }
}
app.use('/',router)

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});