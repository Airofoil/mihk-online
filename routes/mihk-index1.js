var sessions = require('express-session');

/*
var crypto = require('crypto'),

function encrypt(text){
    var cipher = crypto.createCipher('aes-256-ctr', cheeseburger)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}
function decrypt(text){
    var decipher = crypto.createDecipher('aes-256-ctr', cheeseburger)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}
*/

var sessions = {};
var users = [{email:"email@domain.com",password:"1234"}]

var players = [];
var online = [];


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



io.on('connect', (socket) => {
    console.log('a user connected with id:',socket.id);

    io.emit('user join', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});















router.get('/newgame', function (req, res) {
    fs.readFile('pages/onlinelogin.html', 'utf8', function (err, data) {
        res.send(data);
    });
});





// Posts from Login page
router.post('/join', function(req, res, next) {

    var user = null;

    console.log('Received details from login: ',req.body);

    // If login details present, attempt login
    if (req.body.email !== undefined && req.body.password !== undefined) {
        console.log("Email + Password received");


        req.pool.getConnection(function(err, connection) {

        //exports.login = function (req,res) {
            var email = req.body.email;
            var password = req.body.password;

            connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {

                if (error) {
                    res.status(403);
                    console.log('Error occurred.');
                }
                else {
                    if (results.length > 0) {
                        if (decrypt([0].password) == password) {
                            res.status(200)
                            console.log('Login successful.');
                        }
                        else {
                            res.status(400);
                            console.log('Incorrect password.');
                        }
                    }
                    else {
                        res.status(401);
                        console.log('Unknown user.');
                    }
                }
            });
        });




        /* JSON variable Login
        for (var i=0; i<users.length; i++) {

            if (users[i].email === req.body.email && users[i].password === req.body.password) {  // If email and password match, login and send to account page
                res.status(200)
                console.log('Login successful.');
                //sessions[req.session.id] = req.body.email;
                sessions[req.session.id] = users[i].email;
                user = users[i].email;
            }
            else if (users[i].email === req.body.email && users[i].password !== req.body.password) {  // If password incorrect, redirect to login
                res.status(400);
                console.log('Incorrect password.');


                    //res.render('error', { message: 'Incorrect password.' });
                    //.send('Your password is incorrect.');
            }
            else if (users[i].email !== req.body.email) {  // If email does not exist, redirect to login page
                res.status(401);
                console.log('Unknown user.');


                    //res.render('error', { message: 'Unknown user.'});
                    //res.send('Unknown user \"'+req.body.email+'\". <a href=\"javascript:document.getElementById(\"register\").click();\">Sign Up</a> instead?');
            }
        }
        res.json({email:user});
        */




    // If Google login token present in request
    }
    else if (req.body.idtoken !== undefined) {
        console.log("Google Token Recieved");

        async function verify() {
            // Verify Google ID token
            const ticket = await client.verifyIdToken({
                idToken: req.body.idtoken,
                audience: CLIENT_ID
            });

            // Get user data from token
            const payload = ticket.getPayload();

            // Get user's Google ID
            const gid = payload['sub'];
            const gfirstname = payload['given_name'];
            const gsurname = payload['family_name'];
            const gemail = payload['email'];
            const gdp = payload['picture'];
                console.log('Google ID:');
                console.log(gfirstname);
                console.log(gsurname);
                console.log(gemail);
                //console.log(gdp);


            connection.query('SELECT * FROM users WHERE email = ?', [gemail], function (error, results, fields) {
                if (results.length > 0) {
                    if ([0].gid == password) {      // If Google email matches a user and Google ID matches database
                        res.status(200);
                        sessions[req.session.id] = users[i].email;
                        user = users[i].email;
                    }
                }
                else {
                    res.status(200);
                    console.log('Google signup successful');

                    req.pool.getConnection(function(err, connection) {
                        if(err) throw err;
                        var sql = "INSERT INTO users (email, password, firstname, lastname) VALUES (?, ?, ?, ?)";

                        connection.query (sql, [gemail, gid, gfirstname, gsurname], function(err, results) {      //------Password is inserted as google ID - this can be used
                            console.log(results);
                            connection.release();
                            res.send({"userID":results.insertId});



                            //users.push({email: gemail, firstname: gfirstname, lastname: gsurname, google: gid, photo: gdp});
                            sessions[req.session.id] = users[i].email;
                            user = users[i].email; // Save session
                        });
                    });
                }
            res.json({email:user});
            });
        }
        verify().catch(console.error);
    }
});

// If no login details, but valid session
/*
else if (sessions[req.session.id] !== undefined) {
    console.log("Valid session");
    user = sessions[req.session.id];
    res.json({email:user});
    console.log(sessions[req.session.id]);
}
*/






router.post('/newuser.json', function(req, res) {

    var user = null;
    console.log('Received details from signup: '+JSON.stringify(req.body));


    connection.query('SELECT * FROM users WHERE email = ?', [req.body.email], function (error, results, fields) {
console.log(req.body.email);
console.log('DATABSE CEHKIGN');
        if (error) {
            res.status(403);
            console.log('I must say, you steam a good ham.');
        }
        else {
            if (results.length > 0) {       // If email matches already existing user, stop signup
                res.status(402)
                console.log(req.body.email);
                console.log(results);
                console.log('User already exists');
            }
            else {
                res.status(200)
                console.log('Signup successful')
                                            /*
                                                if (users[i].email === req.body.email) {
                                                    res.status(402)
                                                    console.log(req.body.email);
                                                    console.log(users[i].email);
                                                    console.log('User already exists');
                                                }
                                                else {
                                                    res.status(200)
                                                    console.log('Signup successful')
                                            */
                req.pool.getConnection(function(err, connection){
                    if(err) throw err;
                    var sql = "INSERT INTO users (email, password, firstname, lastname) VALUES (?, ?, ?, ?);";



                    connection.query(sql, [req.body.email, encrypt(req.body.password), req.body.firstname, req.body.lastname], function(err, results){
                        console.log(results);
                        connection.release();
                        res.send({"userID":results.insertId});
                    });
                });

            }
        }
    });
});
//var sql = "INSERT INTO customer (name_first, name_last, address) VALUES ('"+req.body.firstname+"', '"+req.body.lastname+"', '"+req.body.address+"');";
//var sql = "UPDATE line SET cnumber = ? WHERE lnumber = ?";
//-- INSERT INTO database 'email', 'password'--
//users.push({email: req.body.email, password: req.body.password, firstname: req.body.firstname, lastname: req.body.lastname});


router.get('/logout', function(req, res) {
    sessions[req.session.id] = null;

    req.session.destroy();
        res.send('<!DOCTYPE html>\
                    <html> \
                        <head> \
                        <title>Logged out</title> \
                        </head> \
                        <body> \
                          <h2>Successfully logged out</h2> \
                        </body> \
                    </html>');
    //res.redirect('login.html');
});





module.exports = router;