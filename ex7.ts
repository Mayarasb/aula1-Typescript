import PromptSync, { Prompt } from "prompt-sync"

const prompt = PromptSync();

let anoNascimento: number = Number(prompt("Digite o seu ano de nascimento"))
console.log(`Ano de Nascimento: ${anoNascimento}`)
let idade: number = 0
let condicao = true;
while (condicao){
    anoNascimento = anoNascimento + 1;
    idade = idade + 1;
    console.log(`Ano: ${anoNascimento}, Idade: ${idade} `)
}