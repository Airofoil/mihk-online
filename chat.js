var app = require('express')();
var session = require('express-session');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
const fs = require('fs');

// Log http
var logger = require('morgan');



app.use(logger('dev'));
app.use(require('express').static('public'));
app.use(session({secret: 'steamed hams', resave: false, saveUninitialized: true}));

var sessions = {};

/*
s294mioDWjiWODIlWmP: { socket: "Kdnu354_HWIUD_4ef5", username: "Jeff" }
*/

const chatbox = '\
<div id="joined">\
    <ul id="messages"></ul>\
    <form id="chatbox" action="">\
        <input id="m" autocomplete="off" /><button>Send</button>\
    </form>\
</div>\
<script src="/socket.io/socket.io.js"></script>\
<script src="chat-socket.js"></script>';

const loginbox = '\
<div class="loginpage">\
    <form id="join" action="/join" method="POST">\
        <input type="text" id="username" placeholder="What\'s your name?" /><input type="submit" value="Enter" />\
    </form>\
</div>';

function getPages() { const pages = [];
    fs.readdir(__dirname, (err, files) => {
        if (err) return console.log('Unable to scan directory: ' + err);
        files.forEach(file => pages.push(file));
    });
    return pages;
}

const pages = getPages();
setTimeout(() => console.log(1,pages), 1000);











app.get('/chat-socket.js', (req, res) => { console.log(req.session.id);
    res.sendFile('/js/chat-socket.js');
});


app.get('/', (req, res) => { console.log(req.session.id);
    res.sendFile('/public/index.html');
});

app.get('/socket.io/socket.io.js', (req, res) => { console.log(req.session.id);
    if (sessions[req.session.id]) res.sendFile('/socket.io/socket.io.js');
});

app.get('/login', (req, res) => { console.log(req.body);
    if (sessions[req.session.id]) {
        res.send(chatbox);
    }
    else res.send(loginbox);
});



var router = require('express').Router();
router.post('/join', (req, res) => { console.log(65,req.body);
    if (!req.body || !req.body.username) { res.status(400); return }
    if (req.body.username.length < 3) { res.status(400).send("Username too short."); return  }
    if (!req.body.username.match(/^[a-zA-Z0-9_-]{3,20}$/)) { res.status(400).send("Username must be alphanumeric and may have '_' and '-'."); return }


    if (sessions[req.session.id]) { console.log("Session exists");
        sessions[req.session.id] = req.body.username;
        res.status(200).send();
    }
    else { console.log('pitabread');
        sessions[req.session.id] = req.body.username;
        res.status(400).send("Username too short.");
    }
});

io.on('connect', (socket) => {
    console.log('a user connected with id:',socket.id);

    io.emit('user join', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });



    socket.on('update', data => {
        socket.broadcast.emit('update', data);
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});







// 404 Route
app.get('*', (req, res) => {
    res.status(404).send("404 Not Found Boio");
});

module.exports = app;







// app.use((req, res, next) => { console.log(req.url);
//     for (i in pages) if (pages[i] === req.url) {
//         res.status(200).sendFile(req.url);
//         return;
//     }
//     next();
// });