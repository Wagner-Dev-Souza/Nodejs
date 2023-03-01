/**
 * Tutorial Node.js
 * Variáveis
 */

console.log("______________________")
const nome = "José de Assis"
console.log(nome)
console.log(typeof nome)
const pi = 3.14
console.log(pi)
console.log(typeof pi)
const vip = true
console.log(vip)
console.log(typeof vip)
//pi = 3.1415 apresenta erro pois não se pode modificar constantes
console.log("_________________________var")
var time = "Corintians"
console.log(time)
time = "Palmeiras"
console.log(time)
//problema no uso do var para declarar uma variável
var time = "São Paulo"
console.log(time)//permite redeclarar
//pode gerar problema no projeto
console.log("_____________________let")
let linguagem = "Java"
console.log(linguagem)
linguagem = "JavaScript"
console.log(linguagem)//permite modificar
//let linguagem = "Python"//mas não permite redeclarar