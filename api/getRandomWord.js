var urban = require('urban')

module.exports = getRandomWord

function getRandomWord(callback){
  urban.random().first(function(json){
    console.log(json)
    var response = {
      word: json.word,
      definition: json.definition,
      example: json.example
    }
    callback(response)
  })
}
