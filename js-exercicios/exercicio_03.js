/*
    Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário,
    num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que 
    X é quanto o funcionário ganhou no mês
*/

function salarioFuncionario(horasTrabalhadas, valorHora){
    var salarioBruto = horasTrabalhadas * valorHora
    var salarioLiquido = salarioBruto - salarioBruto * 30/100
    
    return `Salário igual a R$${salarioLiquido}`
}

console.log(salarioFuncionario(150, 40.5))