var express = require('express');
var router = express.Router();
var db = require('../config/db');
/* GET home page. */
router.get('/', function (req, res, next) {
    // req 是一个可读流
    req.on('data', chunk => {
        console.log(chunk)
    })
    req.on('end', () => {})
    // 响应行->响应头->响应体顺序不能变
    // 首先设置响应行（状态码与状态码描述）
    res.statusCode = 200
    res.statusMessage = 'success'
    // 设置响应头
    res.setHeader('name', 'superYue')
    // 最后设置响应体
    // res 是一个可写流
    res.write('ok')
    res.end('1')
    // res.render('index', {title: 'index'});
});
router.get('/getNum', function (req, res) {
    res.send({
        '您的幸运数字': Math.ceil(Math.random() * 100)
    })
})
router.get('/getGirlFriend', function (req, res, next) {
    let obj = {
        name: '李玉华',
        age: '23',
        weight: '99'
    }
    res.send(obj);
});
module.exports = router;
