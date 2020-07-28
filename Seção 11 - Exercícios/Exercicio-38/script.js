class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    get verRua(){
        return "Nova" + this.rua
    }
    set novaRua(value){
        this.rua = value
    }

    get verBairro(){
        return "Novo" + this.bairro
    }
    set novoBairro(value){
        this.bairro = value
    }

    get verCidade(){
        return "Nova" + this.cidade
    }
    set novaCidade(value){
        this.cidade = value
    }

    get verEstado(){
        return "Novo" + this.estado
    }
    set novoEstado(value){
        this.estado = value
        
    }
}

let end = new Endereco("Av. Macuco", "Moema", "São Paulo", "SP")

console.log(end)

end.novaRua = "Jõao Pessoa"
end.novoBairro = "Menezes"
end.novaCidade = "Belo Horizonte"
end.novoEstado = "MG"

console.log(end)

end.novaRua = "Rua Afonso Pena Junior"
end.novoBairro = "Cidade Nova"

console.log(end)