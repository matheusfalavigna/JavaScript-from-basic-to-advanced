class contaBancaria {
    constructor(saldoCC, saldoCP, jurosPoupança){
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.jurosPoupança = jurosPoupança
    }

    deposito(novoDeposito){
        this.saldoCC += novoDeposito
    }

    saque(novoSaque){
        this.saldoCC -= novoSaque
    }

    transferir(novaTransferencia){
        if(novaTransferencia > this.saldoCP){
            console.log("Transação inválida")
        }else{
        this.saldoCC += novaTransferencia
        this.saldoCP -= novaTransferencia
        }
    }

    juros(){
        this.saldoCP += this.saldoCP * this.jurosPoupança / 100
    }   
}

class contaEspecial extends contaBancaria{
    constructor(saldoCC, saldoCP, jurosPoupança){
        super(saldoCC, saldoCP, jurosPoupança)
        this.jurosPoupança = this.jurosPoupança * 2
    }
}

let Cleber = new contaBancaria(10000, 20000, 3)

console.log(Cleber)

Cleber.deposito(20000)

console.log(Cleber)

Cleber.saque(10000)

console.log(Cleber)

Cleber.transferir(50000)

console.log(Cleber)

Cleber.juros()

console.log(Cleber)

let Pedro = new contaEspecial(50000, 30000, 3)

console.log(Pedro)

Pedro.deposito(20000)

console.log(Pedro)

Pedro.saque(10000)

console.log(Pedro)

Pedro.transferir(10000)

console.log(Pedro)

Pedro.juros()

console.log(Pedro)