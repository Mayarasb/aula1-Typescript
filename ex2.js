"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = prompt("Digite um número maior que 10: ");
numeros.push(Number(numero));
console.log(numeros);
