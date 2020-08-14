let nomeUsuario = /^(?=.{3,16}$)[a-zA-Z-_]/

console.log(nomeUsuario.test("matheus-12"))
console.log(nomeUsuario.test("111111111111111111111111111111111111"))
console.log(nomeUsuario.test("mat"))
console.log(nomeUsuario.test("11"))

