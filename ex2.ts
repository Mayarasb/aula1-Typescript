import PromptSync, { Prompt } from "prompt-sync"

const prompt = PromptSync();

const numeros :number[] = [1,2,3,4,5,6,7,8,9,10]

const numero = prompt("Digite um número maior que 10: ");
numeros.push(Number(numero))
console.log(numeros);  

