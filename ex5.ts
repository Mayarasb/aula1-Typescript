import PromptSync, { Prompt } from "prompt-sync"

const prompt = PromptSync();

const x = prompt("Digite um número: ");
const y = prompt("Digite outro número: ");
const z = prompt("Digite outro valor: ")
if ( (z > x) && (z < y)){
    console.log(`O valor de ${z} está dentro do intervalo de ${x} à ${y}`)
}
else{
    console.log(`O valor de ${z} está fora do intervalo de ${x} à ${y}`)
}

