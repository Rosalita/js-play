

function fizzbuzz(input){
    if (input== 'hi'){
        return "Hello"
    } 
    if (input === parseInt(input, 10)){

        
        let string = ""
        for (i = 0; i < input; i++) { 
          string += i + 1
          string += ','
        }

        string = string.substring(0, string.length - 1);

        return string
    } 
  }

module.exports.fizzbuzz = fizzbuzz;