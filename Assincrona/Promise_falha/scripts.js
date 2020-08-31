let errada = Promise.resolve(new Error("Algo deu errado"));

console.log("lalala");

errada.then((value) => console.log(value))
      .catch(reason => console.log("Falhou: " + reason));