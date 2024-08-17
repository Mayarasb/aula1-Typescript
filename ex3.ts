import PromptSync, { Prompt } from "prompt-sync"

const prompt = PromptSync();

function valores(num1:number, num2:number){}
    return console.log(`Soma: ${num1 + num2}´)
}         


let x : number = Number(prompt("Digite um valor"));
let y : number = Number(prompt("Digite outro valor"));
let operacao = valores(x,y)
console.log(operacao)