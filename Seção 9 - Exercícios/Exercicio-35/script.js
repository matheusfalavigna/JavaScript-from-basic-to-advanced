let calculadora = {
    soma: function(x,y){
        return x + y
    } ,
    subtracao: function(x,y){
        return x - y
    },
    multiplicacao: function(x,y){
        return x * y
    },
    divisao: function(x,y){
        return x / y
    }
}

console.log(calculadora.soma(2,4))
console.log(calculadora.subtracao(9,4))
console.log(calculadora.multiplicacao(5,5))
console.log(calculadora.divisao(81,9))
