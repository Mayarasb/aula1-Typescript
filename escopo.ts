var a = 5;
var b = 10;

const x = 10; // não consigo alterar o valor da variável

if (a == 5) {
    let a = 4;//escopo do if
    var b = 1;//escopo dentro da funcao

    console.log(a); //4
    console.log(b); //1
}

console.log(a);//5 -- não altera o valor
console.log(b);//1 -- alterou o valor