var express = require('express')
var expresshbs = require('express-handlebars')
var getRandomWord = require('./api/getRandomWord')
var bodyParser = require('body-parser')
var app = express()


//APP ENGINE:
app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

var data = {
  sentences: [
  {
    id: 0,
    word: 'FADC',
    definition: 'Focus Attack Dash Cancel\r\n\r\nIn Street Fighter 4, you can cancel one of your character\'s special moves by using the focus attack right after using your special move, thus canceling the special move. After canceling with the focus attack, you can then dash out and cancel your focus attack.'
  },
  {
    id: 1,
    word: 'hyphie',
    definition: '1. the act of being very amped up. \r\n2. the act of being crazy, pretty much the same as the first definition i gave.'
  }
]}


var newWordObj = {}


app.listen(3000, function() {
  console.log("server listening on port 3000!")
})

app.get('/', function (req, res) {
  getRandomWord(function(response){
    newWordObj = response
    res.render('sentencesAdd', newWordObj)
  })
})

app.post('/sentences', function (req, res){
  newWordObj.sentence = req.body.newSentence
  res.render('sentencesIndex', newWordObj)
})

app.get('/sentences/loser', function(req, res) {
  res.render('sentencesLost')
})