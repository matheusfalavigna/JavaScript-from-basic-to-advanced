function verificarNumero(num){
    return new Promise((reason, reject) => {
        if(num == 2){
            reason(console.log(`O número é ${num}`));
        }else{
            reject(new Error("Falhou"));
        }
    })
}

verificarNumero(2);
verificarNumero(3);