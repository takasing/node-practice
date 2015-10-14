var async = require('async');

var Async = function(name) {
  this.asyncTest = function() {
    async.waterfall([
      function(callback) {
        console.log("--first");
        callback(null, "hoge");
      },
      function(arg1, callback) {
        setTimeout(function() {
          console.log("--second");
          callback(null, arg1, "fuga");
        }, 200);
      },
      function(arg1, arg2, callback) {
        console.log("--third");
        callback(null, arg1, arg2, "piyo");
      }
    ], function callbackTest(err, arg1, arg2, arg3) {
      console.log("arg1=" + arg1 + ", arg2=" + arg2 + ", arg3=" + arg3);
    });
  }
}

module.exports = Async;
