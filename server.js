var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//application middleware
var middleware = require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication)

//app.get('/', function (req, res) {
//    res.send('hello express');
//})

//get takes route and function. Function takes request object and response
//app.get('/about', function (req, res) {
//    res.send('About Us');
//})

//route-specific middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About The Site');
})

//expose entire public folder
app.use(express.static(__dirname + '/public'));

//app.listen(3000);//choose port to listen on

app.listen(PORT, function () {
    console.log('Express Server started on port ' + PORT);
});