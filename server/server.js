/**
 * Created by hshen on 9/23/16.
 */

// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');


var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);


var port = process.env.PORT || 3000;
server.listen(port);


// 接口路由
app.get('/data/:module', function (req, res, next) {
    var c_path = req.params.module;
    var action = require('./action/data/' + c_path);
    action.execute(req, res);
});

// 对所有(/)URL或路由返回index.html
app.get('/', function (req, res) {
    res.render('index');
});

// 设置views路径和模板
app.set('views', './client/src/html');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/static', express.static('./client/build'));

io.sockets.on('connection', function (socket) {
    console.log("new user!")
    socket.broadcast.emit('newlogin',{ new: 'signed!' })

    socket.on('newMessage', function (data) {
        io.sockets.emit('newMessage',data);

    });

});