//Exercício
// Crie um programa que receba um número do usuário
// e exiba seus 2 sucessores e seus 2 antecessores.
import promptSync = require('prompt-sync');
var prompt = promptSync();

var numero : number = Number(prompt("Digite um número: "))
const ant1: number = numero -1;
const ant2: number = numero -2;
console.log(`Sucessores = ${numero+1},${numero+2} 
    \nAntecessores = ${ant1},${ant2} `)