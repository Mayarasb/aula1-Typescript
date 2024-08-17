"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const x = prompt("Digite um número: ");
const y = prompt("Digite outro número: ");
const z = prompt("Digite outro valor: ");
if ((z > x) && (z < y)) {
    console.log(`O valor de ${z} está dentro do intervalo de ${x} à ${y}`);
}
else {
    console.log(`O valor de ${z} está fora do intervalo de ${x} à ${y}`);
}
