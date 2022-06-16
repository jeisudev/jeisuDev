/*Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?*/


var indice = 13;
var soma = 0;
var k = 0;

while(k < indice){
    k = k + 1 
    soma = soma + k
}
console.log(soma)

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

var valor = 0;

var numeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

for (i in numeros){
    if (valor == numeros[i]) {
        console.log("Ele pertence")
        break
    }else {
        console.log("Ele nao pertence")
        break
    }
}
console.log(numeros);


/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

var dias = [
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
var menorNumero = 3000000000;
var maiorNumero = 0;
var media = 0;
var contador = 0;
var mediaMensal = 0;

for(i in dias){
    if(dias[i].valor <= menorNumero && dias[i].valor != 0){
        menorNumero = dias[i].valor
    }
    if(dias[i].valor >= maiorNumero){
        maiorNumero = dias[i].valor
    }
    if(dias[i].valor != 0 ){
        media += dias[i].valor
        contador++
    }
    if(dias[i].valor != 0 ){
        mediaMensal += dias[i].valor
    }

}
media = media / contador;
console.log("O menor valor de fatuaramento",menorNumero);
console.log("O maior valor de faturamento",maiorNumero);
console.log("Media Diaria",media);
console.log("Media mensal",mediaMensal);


/*O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/



/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/
function somarPersentual(){
    var sp = 67.836;
    var rj = 36.678;
    var mg = 29.229;
    var outros = 19.849;

   var total = (sp + rj + mg + outros).toFixed(2)
   var somaSp = (sp * 100 / total).toFixed(2);
   var somaRj = (rj * 100 / total).toFixed(2);
   var somaMg = (mg * 100 / total).toFixed(2);
   var somaOutros = (outros * 100 / total).toFixed(2);
   console.log("O total de persentual é ",total,"R$")
   console.log("SP:",somaSp,"%");
   console.log("RJ:",somaRj,"%");
   console.log("MG:",somaMg,"%");
   console.log("Outros:",somaOutros,"%");
}
somarPersentual()

/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
console.log(inverterString("Teste de string"));

//NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU 