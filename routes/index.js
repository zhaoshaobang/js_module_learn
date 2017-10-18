var express = require('express');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index.html', { name: 'Express' });
// });
router.get('/home/test', function (req, res, next) {
    var url = path.join(__dirname, "../public/template", 'home/index.html');
    fs.readFile(url, 'utf-8', function (err, data) {
        res.send(data);
    });
    //res.render(url);
});
module.exports = router;
