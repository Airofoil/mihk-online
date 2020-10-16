// Requires
var express = require('express');
var sessions = require('express-session');
var router = express.Router();
var fs = require('fs');
var pug = require('pug');
const path = require('path');

const data = require('../db.js'); //console.log(data); // Load database functions

var sessions = {};

//data.get("people").then(r => console.log(r))

// var crypto = require('crypto'),
// function encrypt(text) {
//     var cipher = crypto.createCipher('aes-256-ctr', cheeseburger)
//     var crypted = cipher.update(text,'utf8','hex')
//     crypted += cipher.final('hex');
//     return crypted;
// }
// function decrypt(text) {
//     var decipher = crypto.createDecipher('aes-256-ctr', cheeseburger)
//     var dec = decipher.update(text,'hex','utf8')
//     dec += decipher.final('utf8');
//     return dec;
// }


// router.get('/', function(req, res, next) {
//     res.redirect('airotech.html');
//   });
//hotels = JSON.parse(data);



const pagesDirectory = path.join(__dirname, '../pages');
const folioDirectory = path.join(__dirname, '../public/images/icons');


// router.get('/profile', (req, res) =>
//     fs.readFile('pages/profile.html', 'utf8', (err, data) =>
//         res.send(data)
//     )
// );

router.get('/data', (req, res) =>
    data.get('people').then(r => { console.log(r);
        res.send(r).status(200);
    }).catch(console.error)
);




class Game {
    constructor(id, host) {
        this.id = id;
        this.host = host;
        this.players = []; // {username:"jeff", token:"nc783gh29871"}
        this.players.push(host);
    }
    get playerCount() {
        return this.players.length;
    }
}




app.use('/mihk', require('./routes/users')) // goes in app.js


router.get('/newgame', function (req, res) {
    fs.readFile('pages/onlinelogin.html', 'utf8', function (err, data) {
        res.send(data);
    });
});





var players = [];
var online = [];

router.get('/game/online', function (req, res) {
    fs.readFile('pages/onlinelogin.html', 'utf8', function (err, data) {
        res.send(data);
    });
});

router.post('/login', function (req, res) {
    console.log("/login:", req.body);
    if (!req.body || req.body == undefined) { res.status(400); console.log('fyug'); return }

    fs.readFile('data/players.json', 'utf8', function (err, data) {
        if (err) console.error(err);
        players = data;
    });

    for (p in players) {
        console.log('d', p + players[i].username)
        if (players[p].username === req.body.username) {
            online.push(players[p].username);
            console.log('Logged in ' + players[p].username + " | " + players[p].score);

            res.status(200);
            res.send(players[p]);
            break;
        }
        else if (p >= players.length) {
            var newplayer = { username: req.body.username, score: 0 };
            players.push(newplayer);

            fs.writeFile("data/players.json", JSON.stringify(players), (err) => {
                if (err) console.error(err)
                console.log('Created player ' + newplayer.username);
            });

            online.push(newplayer.username);

            res.status(200);
            res.send(newplayer);
        }
    }
});

module.exports = router;