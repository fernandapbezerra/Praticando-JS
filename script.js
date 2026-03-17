/*
Comentario em bloco
*/

//Comentario em linha
//Variaveis o que sao?
//Palavras chve para criar variaveis:
/*
   Const
   Let
   Var
*/
//CONST: Quando um valor nao pode mudar (+ seguro)
const idade = 30; // caixinha idade recebe o valor 30.

//LET: Quando um valor pode mudar (+ utilizado)
let nome = "Kessia";

//VAR: Forma antiga de declarar variaveis (evitar usar)
var cidade = "São Caetano do Sul";

//Imprimindo os valores
/*
console.log(idade); //Imprimir o valor 30
console.log(nome); //Imprimir Kessia
console.log(cidade); //Imprimir São Caetano do Sul
*/

//ALTERANDO VALORES
/*
console.log(nome); //antes de alterar o nome
nome = "Lucas";
console.log(nome); //depois de alterar o nome 

console.log(idade);
idade = 25;
console.log(idade);
*/
/*
let tamanho; // permite criar variavel vazia
const cor; // nao permite criar variavel vazia
*/

/*
//INTERPOLACAO
console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade.`);
console.log("Juntando nome" + nome + "com idade" + idade);
*/

/*
//TIPOS PRIMITIVOS
//1.String: Textos em geral
let mensagem = "Olá mundo";
console.log( typeof mensagem); //imprime o tipo de dado

//2.Number (numero): Armazena numeros inteiros ou decimais
let quantidade = 5; // numero inteiro
let temperatura = 36.5; //numero decimal (cassas depois da virgula)

console.log(typeof quantidade);

//3.Boolean (true/false): verdadeiro ou falso
let estaChovendo = true;
let temSol = false;

console.log(typeof temSol);

//4.Undefined: Variavel ainda nao recebeu valor 
let pedido;
console.log(typeof pedido);

//5.Null: Usado para representar ausencia intencional de valor
let endereco = null;
console.log(typeof endereco);
*/
/*
//Conversao de tipos (automatica)
//Conversao implicita: Acontece de forma automatica
console.log("5" + 3); //concatenacao - 53 (tipo string)
console.log("5" - 3); // 2 - (tipo number)

//Conversao Explicita (manual) - Acontece usando fucoes:
//converter para numero 
let numero = "42"; // string (Texto)
console.log(typeof numero);

let numeroConvertido = Number(numero); //converteu para Number
console.log(typeof numeroConvertido);

//Converter para string 
let num = 100;
console.log(typeof num);

let texto = String(num); //convertendo o numero para texto
console.log(typeof texto);

//converter booleano para numero 
let trueConvertido = Number(true); //1
console.log(trueConvertido);

let falseConvertido = Number(false); //0
console.log(falseConvertido);
*/

/*
//Operadores Relacionais: Servem para comparar valores:
 > maior que 
< Menor que
>= Maior igual 
<= Menor igual 
== Igualdade  (ignorando o tipo)
=== Igualdade (verifica o tipo)
!= Diferente (ignora o tipo)
!== Diferente  (verifica o tipo)

//Exemplos:
console.log(10 > 5); //true  (verdadeiro)
console.log(10 < 5); //false (falso)

//Diferenca entre == e ===
console.log(5 == "5"); // ignora o tipo (true)
console.log(5 === "5"); // verifica o tipo (false)
*/

//Operadores Matematicos: Sao usados para fazer calculos - como soma, multiplicacao ...
/*
+ Soma
- Subtracao 
/ Divisao 
% Resto da Divisao
** Potencia
*/

//Exemplo:
let a = 10;
let b = 5;

console.log(a + b); //soma
console.log(a - b); //subtracao
console.log(a * b); //multiplicacao
console.log(a / b); //divisao

//Operador de resto
console.log(10 % 3); //retornar o resto

//Operador de potencia
console.log(2 ** 3); //2 elevado a 3 -> 2 * 2 * 2