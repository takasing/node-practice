var Async = require('./src/async');

console.log("start");
var Async = new Async("hoge");
console.log(Async.toString());
Async.asyncTest();
console.log("finished");
