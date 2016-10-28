var express = require('express')
var expresshbs = require('express-handlebars')

var app = express()

//APP ENGINE:
app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

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

app.listen(3000, function() {
  console.log("example app listening on port 3000!")
})

app.get('/', function (req,res) {
  res.render('sentencesAdd', data.sentences[0])
})
