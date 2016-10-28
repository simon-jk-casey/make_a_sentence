var urban = require('urban')

module.exports = getRandomWord

function getRandomWord(callback){
  urban.random().first(function(json){
    var response = {
      word: json.word,
      definition: json.definition
    }
    callback(response)
  })
}


// var getRandomWord = require('./api/getRandomWord')
//
// getRandomWord(function(res){
//   console.log(res)
// })
