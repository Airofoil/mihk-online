echo ('<h4>Web Status</h4>');
mysql_connect('localhost','root','root') or die('<li>' . mysql_error());
print ('Connected to server. <br>');


INSERT INTO 'FSJ Users'.'users' ('email', 'password', 'firstname', 'lastname') VALUES ('$email', '$password', '$fname', '$lname')

date("y/m/d, H:i T")


// 2. Connect to the database - users
mysql_select_db('users') or die(mysql_error());
print ('Database located. <br>');




var sql = "UPDATE user SET firstname =? WHERE
Cnumber =?";

var new_name = "Adele";
var cnumber = 2;
con.query(sql, [name])

var sql = "INSERT INTO users
(firstname, lastname, email, password)"

res.send(user);

var sql

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    
    var users = JSON.parse(xhttp.responseText);
    var select = document.getElementById('cnumber-list');
    select.innerHTML = "";
    
    for (i=0; i<users.length; i++) {
        select.innerHTML += "<option value='"+ users[i].cnumber +"'>" + users[i].name + "</option>"
    }   
}

createJSON('')



// for index.js:

router.post('/hireLine', function(req, res) {
    var sql = "UPDATE line SET cnumber = ? WHERE lnumber = ?";
    req.pool.getConnection(function(err, connection) {
        connection.query (sql, [req.body.cnumber,req.body.lnumber], function(err, results) {
            console.log(results);
            res.send();
            connection.release();
        });
    });
});