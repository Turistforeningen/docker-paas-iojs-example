var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

var domain = process.env.DOMAIN || '';
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.render('index', {
    domain: domain
  });
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
