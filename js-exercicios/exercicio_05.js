/*
    Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

function maiorOuIgual(numero, numeroDois){

    if (typeof numero != typeof numeroDois) return false

    return numero >= numeroDois;
}

console.log(maiorOuIgual(5, '1'))