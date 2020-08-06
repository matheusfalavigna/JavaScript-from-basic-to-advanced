let letrasMaiusculas = new RegExp("[A-Z]")
let letrasMinusculas = /[A-Z]/

console.log(letrasMaiusculas.test("aaa"))
console.log(letrasMaiusculas.test("AAA"))
console.log(letrasMinusculas.test("aaa"))
console.log(letrasMinusculas.test("AAA"))