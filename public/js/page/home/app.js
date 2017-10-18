define(function(require, exports, module) {
    var Add = require('./component/add');
    
    console.log('app')
    var Subtract = require('./component/subtract');
    var a=8,
        b=6;
    console.log(Add.add(a, b));
});
