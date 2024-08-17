import PromptSync, { Prompt } from "prompt-sync"

const prompt = PromptSync();
const numero: number = Number(prompt("Digite um número: "))
if (numero % 2 == 0){
    console.log(`O valor de ${numero} é par`)
}
else{
    console.log(`o valor de ${numero} é ímpar`)
}