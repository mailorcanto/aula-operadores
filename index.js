

//Exercício 1 - pdf aula Operadores e Lógica de Programação
/*
var soma = 3 + 4;
console.log(soma);
var multiplicarDividir = 3 * 5 / 2;
console.log(multiplicarDividir);
var subtrairMultiplicar = (4-5) * -1;
console.log(subtrairMultiplicar);
var restoDivisao = 234 % 5;
console.log(restoDivisao);
/*

/*
//Exercício 2 - pdf aula Operadores e Lógica de Programação

var n1 = 5;
var n2 = 6;

console.log('O primeiro número é igual ao segundo?', n1 === n2);           //1. O primeiro número é igual ao segundo? True/False
console.log('O primeiro número é diferente do segundo?', n1 !== n2);       //2. O primeiro número é diferente do segundo? True/False
console.log('O primeiro número é maior que o segundo?', n1 > n2);          //3. O primeiro número é maior que o segundo? True/False
console.log('O primeiro número é maior que o segundo?',n1 < n2)            //4. O primeiro número é menor que o segundo? True/False
*/

/*
//Exercício 3 - pdf aula Operadores e Lógica de Programação

a = true; 
b = false; 
c = true;

console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(a && b && c);
*/

/*
//Exercício 4 - pdf aula Operadores e Lógica de Programação
a = true;
b = false;
c = false;

console.log (a || b);
console.log( b || c);
console.log (a || c);
console.log(a || b || c);
*/

/*
//Exercício 5 - pdf aula Operadores e Lógica de Programaçao
var nome = prompt('Digite seu nome: ');
var idade = Number(prompt('Digite sua idade: '));
console.log(nome);
console.log(idade);
console.log('É maior de idade? ', idade >= 18);
idadeEm2050 = (2050 - new Date().getFullYear()) + idade;
console.log(idadeEm2050);
*/

//Exercícios de interpretação de código

/*
//1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2; //verifica se booleans bool1 e bool2 retornam true ou false, para informar true caso ambos sejam true, ou false caso um dos dois ou ambos sejam false
console.log("a. ", resultado); //retorna a variável resultado como false, já que o boolean bool2 retorna false

resultado = bool1 && bool2 && bool3; //verifica se booleans bool1, bool2 e bool3 retornam true ou false, para informar true caso os três sejam true, e false caso um ou mais sejam false
console.log("b. ", resultado); //retorna a variável resultado como false, já que o boolean bool2 retorna false

resultado = !resultado && (bool1 || bool2); //reverte o valor da variável resultado e verifica se bool1 ou bool2 retornam true or false, informando true se uma das duas variáveis for true e false se ambas forem false
console.log("c. ", resultado); //retorna a variável resultado como true, já que reverteu o valor anterior de resultado (de false para true) e retornou true para o teste 'OU'

console.log("d. ", typeof resultado); //retorna o tipo da variável resultado, que é um boolean;
*/

/*
//2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

//O programa inicialmente retorna os dois números como texto, um ao lado do outro, sem realizar a soma corretamente, já que não os identifica como números.

let primeiroNumero = prompt("Digite um numero!") //informação lida pelo prompt está sendo armazenada como texto
let segundoNumero = prompt("Digite outro numero!") //informação lida pelo prompt está sendo armazenada como texto

const soma = primeiroNumero + segundoNumero //variável retorna os dois 'textos' previamente digitados, um ao lado do outro

console.log(soma) //console imprime a variável soma, porém sem realizar a soma, apenas mostrando um número ao lado do outro
*/

/*
//3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero! ")); //comando Number faz com o que a informação recebida pelo prompt seja lida como número
let segundoNumero = Number(prompt("Digite um numero! ")); //comando Number faz com o que a informação recebida pelo prompt seja lida como número
const soma = primeiroNumero + segundoNumero;
console.log(soma)
*/

//- Exercícios de escrita de código

/*
//1. Faça um programa que: a) Pergunte a idade do usuário, b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga, (...)

let idade = Number(prompt("Informe sua idade: "));
let idadeAmigo = Number(prompt("Informe idade do seu/sua melhor amigo/amiga: "));

console.log('Você é mais velho do que seu amigo(a)?', idade > idadeAmigo);

let diferencaIdade = idade - idadeAmigo;
console.log('Diferença de idade entre você e seu amigo(a) é de: '+ diferencaIdade);
*/

/*
//2. Faça um programa que: a) Peça ao usuário que insira um número par, b) Imprima na console o resto da divisão desse número por 2. (...)
let numPar = Number(prompt('Informe um número par: '));
console.log (numPar % 2); //Números pares sempre retornarão resto 0 quando divididos por 2, que é o teste para verificar se um número é ímpar ou par
//Qualquer número ímpar informado na variável numPar retornará 1 no console
*/

/*
//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console: a) A idade do usuário em meses (...)

idadeAnos = Number(prompt('Informe sua idade: '));
idadeMeses = idadeAnos * 12;
idadeDias = idadeAnos * 365;
idadeHoras = idadeDias * 24;
console.log('sua idade é de: '+ idadeAnos);
console.log('sua idade em meses é de: '+ idadeMeses);
console.log('sua idade em dias é de: '+ idadeDias);
console.log('sua idade em horas é de: '+ idadeHoras);
*/

/*
//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let primeiroNum = Number(prompt('Informe um número: '));
let segundoNum = Number(prompt('Informe outro número: '));

console.log('O primeiro numero é maior que segundo?', primeiroNum > segundoNum);
console.log('O primeiro número é igual ao segundo?', primeiroNum === segundoNum);
console.log('O primeiro numero é divisível pelo segundo?', (primeiroNum % segundoNum)=== 0); //(primeiroNum % segundoNum) calcula o RESTO da divisão de um valor pelo outro, se retornar 0 significa que um número é divisível pelo outro, por isso ===0;
console.log('O segundo numero é divisível pelo primeiro?', (segundoNum % primeiroNum)=== 0);
*/

//DESAFIOS

/*
//1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K) (...)

let grausK = (77 - 32)*(5/9) + 273.15;
console.log('O valor de 77°F em  K é de: '+grausK+'K');
let grausF = (80)*(9/5)+32;
console.log('O valor de 80°C em  °F é de: '+grausF+'°F');

let grausF2 = (30)*(9/5)+32;
let grausK2 = 30 + 273.15;
console.log('o valor de 30°C em °F e K é de: '+grausF2+'°F e '+grausK2+'K');

let grausC = Number(prompt('Informe temperatura em graus C: '));
let grausF3 = (grausC)*(9/5)+32;
let grausK3 = grausC + 273.15;
console.log('o valor de '+grausC+'°C em °F e K é de: '+grausF3+'°F e '+grausK3+'K');
*/

/*
//2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
//b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

let valorKWH = 0.05;
let valor = valorKWH * 280;
console.log('Valor a ser pago por uma residência que consuma 280 quilowatt-hora é de: '+valor); 
let desconto = valor - (valor * 0.15);
console.log('Valor a ser pago por uma residência que consuma 280 quilowatt-hora COM DESCONTO é de: '+desconto); 
*/


//3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. (...)

let lb = 20;
let lbToKg = lb/2.2046;
console.log('20 lb (libras) equivalem a '+lbToKg+' kg (quilos)');

let oz = 10.5;
let ozToKg = oz/35.274;
console.log('10.5 oz (onças) equivalem a '+ozToKg+' kg (quilos)');

let mi = 100;
let miToM = mi/0.00062137;
console.log('100 mi (milhas) equivalem a '+miToM+' m (metros)');

var ft = 50; //declarado como var para poder reutilizar com novo valor
var ftToM = ft * 0.3048; //declarado como var para poder reutilizar com novo valor
console.log('50 ft (pés) equivalem a '+ftToM+' m (metros)');

let gal = 103.56;
let galToL = gal/0.26417;
console.log('103.56 gal (galões) equivalem a '+galToL+' l (litros)');

let xic = 450;
let xicToL = xic * 0.24;
console.log('450 xic (xícaras) equivalem a '+xicToL+' l (litros)');

var ft = Number(prompt('Informe altura em pés: '));
var ftToM = ft * 0.3048;
console.log(+ft+' ft (pés) equivalem a '+ftToM+' m (metros)');
