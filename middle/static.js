var fs = require('fs');
var path = require('path');

module.exports = function static_(req, res,next) {
  var p = path.resolve(process.cwd(),'./www','.'+req.originalUrl)
  console.log(p);
  fs.access(p,function (err) { 
    if(err) {
      console.log('no access for ' + req.originalUrl);
      if(req.originalUrl === '/') {
        res.sendFile(p + '/index.html');
      }
      next();
    }else {
      fs.stat(p, function(err, stats) {
        if(stats.isFile()){
          console.log("is file");
          res.sendFile(p);
        }
        else{
          console.log("is dir");
          res.sendFile(p + '/index.html');
        }
      });
    }
  })
}