"use strict";
// funções sem parâmetro e sem retorno
function imprime() {
    console.log("Sem parâmetri e sem retorno");
}
//chamada da função
imprime();
// função com parâmetro e sem retorno
function soma(num1, num2) {
    console.log(`Soma: ${num1 + num2} `);
}
//chamada da função
soma(1, 2);
//função com parâmetro e com retorno
function subtrai(num1, num2) {
    return num1 - num2;
}
//chamada da função
const resultado = subtrai(10, 9);
console.log(resultado);
