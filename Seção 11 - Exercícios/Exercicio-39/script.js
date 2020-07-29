class Carro {
    constructor(marca, cor, gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirrigirCarro(km){
        for(let metros = km * 1000; metros > 9999; metros -= 10000){
            this.gasolina -= 1           
        }
    }

    abastecerCarro(litros){
        this.gasolina += litros  
    }
}

let carro = new Carro("Ford", "Prata", 100)

console.log(carro)

carro.dirrigirCarro(20)

console.log(carro)

carro.dirrigirCarro(600)

console.log(carro)

carro.abastecerCarro(50)

console.log(carro)