var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function _onHomeRequest(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function _onListen() {

  console.log('Listening on port ', app.get('port'));

});
