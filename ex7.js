"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let anoNascimento = Number(prompt("Digite o seu ano de nascimento"));
console.log(`Ano de Nascimento: ${anoNascimento}`);
let idade = 0;
let condicao = true;
while (condicao) {
    anoNascimento = anoNascimento + 1;
    idade = idade + 1;
    console.log(`Ano: ${anoNascimento}, Idade: ${idade} `);
}
