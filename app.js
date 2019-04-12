var express = require('express');
var app = express();
var rndstring = require('randomstring');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var CORS = require('cors')();
var path = require('path');
const PORT = 3030;
var request = require('request')
var axios = require('axios')

app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

var multer = require('multer')
var router = express.Router();
var auth = require('./routes/auth')(router, Users, rndstring);
var notice = require('./routes/notice')(router, Users, Boards, rndstring)
var video = require('./routes/video')(router, Users, request)
var chat = require('./routes/chat')(router, io);
var admin = require('./routes/admin')(router, Users, Boards, Admin, multer)
var place = require('./routes/place')(router, Place, request)
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/chat', chat);
app.use('/notice', notice);
app.use('/video', video);
app.use('/administorator', admin)
app.use('/place', place);

http.listen(PORT, ()=>{
  console.log('Server Porting on ' + PORT);
});
