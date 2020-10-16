const morgan = require('morgan')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port, () => console.log('Webserver online at port'+port+' »'));
