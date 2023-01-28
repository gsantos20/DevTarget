const prompt = require("prompt-sync")();
/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

{
    console.log('1) Imprimindo valores')

    let indice = 13
    let sum = 0

    for (let k = 0; k < indice;k++) {
        sum = sum + k
    }
    console.log(sum)
}

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
pertence ou não a sequência. */

{
    console.log('2) Sequência de Fibonacci')

    const n = parseInt(prompt('Insira um numero: '));
    var msg = 'Numero informado não pertence a seguencia'
    let n1 = 0, n2 = 1, proxN;
    
    proxN = n1 + n2;

    while (proxN <= n) {
        // print the next term
        console.log(proxN);
        n1 = n2;
        n2 = proxN;
        proxN = n1 + n2;
        if(n == proxN){
            msg = `Numero informado pertence a seguencia`
        }
    }
    console.log(msg)
}

/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

{
    console.log('3) Calculando valores de faturamento')
    var data = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]
    var valores = [];

    data.forEach(function (item) {
        valores.push(item.valor);
    });

    media = valores.reduce((v, i) => (v + i)) / valores.length

    let acimaMedia = valores.filter(function(val) {
        return val > media;
    }).length;

    console.log("Menor faturamento do mês: " + Math.min.apply(Math, valores));
    console.log("Maior Faturamento do mês: " + Math.max.apply(Math, valores));
    console.log("Quantidade de dias que o faturamento diário ultrapassou à média mensal:  " + acimaMedia); 
}

/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: */

{
    console.log('4) Calculando valores de faturamento mensal de uma distribuidora por estado')

var dist = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}
totalDist = eval(Object.values(dist).join('+'))

function calcPercentDist(val){
    return Math.round(((val / totalDist ) * 100)) + ' %'
}

Object.keys(dist).forEach(function(key) {
     console.log(`Porcentual da Distribuidora de ${key}: ${calcPercentDist(dist[key])}`)
})

}

/* 5) Escreva um programa que inverta os caracteres de um string. */

{
    console.log('4) Revertendo caracteres de uma palavra')

    const str = prompt('Insira uma palavra para inverter: ');

    console.log('Palava invertida: ' + str.split('').sort().join(''))
}