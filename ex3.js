"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function valores(num1, num2) {
    return console.log(`Soma: ${num1 + num2}`);
}
let x = Number(prompt("Digite um valor"));
let y = Number(prompt("Digite outro valor"));
let operacao = valores(x, y);
console.log(operacao);
