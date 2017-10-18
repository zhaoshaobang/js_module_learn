define(function(require, exports, module) {
    var Add = require('./component/add');
    var Subtract = require('./component/subtract');
    console.log('app')
    var a=8,
        b=6;
    console.log(Add.add(a, b));
});
