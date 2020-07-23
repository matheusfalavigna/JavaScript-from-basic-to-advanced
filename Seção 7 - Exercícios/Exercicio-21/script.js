function tipoDeDado(x){
    if(typeof x === "string"){
        console.log("String")
    }else if(typeof x == "number"){
        console.log("Number")
    }else if(typeof x == "boolean"){
        console.log("Boolean")
    }
}

tipoDeDado("Ola")
tipoDeDado(123)
tipoDeDado(true)