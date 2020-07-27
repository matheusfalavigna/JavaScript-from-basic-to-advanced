class Banco {
    constructor(saldo){
        this.saldo = saldo
    }
    deposito(novoDeposito){
        this.saldo += novoDeposito
    }
    saque(novosaque){
        this.saldo -= novosaque
    }
}

let banco = new Banco(1000)

banco.deposito(1200)
console.log(banco.saldo)
banco.saque(678)
console.log(banco.saldo)