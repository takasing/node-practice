var async = require('async');

var Async = function(name) {
  this.name = name;
  this.toString = function() {
    return "name : " + this.name + ".";
  }
  this.asyncTest = function() {
    async.waterfall([
      function(callback) {
        console.log("--first");
        callback(null, "hoge");
      },
      function(arg1, callback) {
        console.log("--second");
        callback(null, arg1, "fuga");
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
