/**
 * Created by hshen on 9/23/16.
 */

// Import modules
var express = require('express');
var path = require('path');
var ejs = require('ejs');

// Create server
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;
server.listen(port);

// Return index.html for '/'
app.get('/', function (req, res) {
    res.render('index');
});

// Set path for views and static resources
app.set('views', './client/src/html');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/static', express.static('./client/build'));

io.sockets.on('connection', function (socket) {
    socket.broadcast.emit('newlogin',{ new: 'signed!' })

    socket.on('newMessage', function (data) {
        io.sockets.emit('newMessage',data);

    });

});