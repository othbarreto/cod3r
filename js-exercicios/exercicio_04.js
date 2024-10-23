/*
    Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma String. Por exemplo,
    se a entrada for 2, a função deverá retornar 'fevereiro', pois este é o 2º mês
*/

function retornaMes(numeroMes){
    switch (numeroMes){
        case 1: 
            console.log('Janeiro')
            break
        case 2: 
            console.log('Fevereiro')
            break
        case 3: 
            console.log('Março')
            break
        case 4: 
            console.log('Abril')
            break
        case 5: 
            console.log('Maio')
            break
        case 6: 
            console.log('Junho')
            break
        case 7: 
            console.log('Julho')
            break
        case 8: 
            console.log('Agosto')
            break
        case 9: console.log('Setembro')
            break
        case 10: console.log('Outubro')
            break
        case 11: console.log('Novembro')
            break
        case 12: console.log('Dezembro')
            break
    }
}

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}
    

// retornaMes(6)
console.log(receberNomeDoMes(6))