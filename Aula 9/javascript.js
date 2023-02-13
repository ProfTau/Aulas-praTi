
//Exemplos de variáveis
var x = 5;
var y = 6;
var z = x + y;


//Keyword 'let'
let nome = "João"; //declarando com valor
nome = "Ana"; //reatribuindo um valor 

let nome = 0; //vai dar erro, pois está redeclarando


//Keyword 'var'
var nome = "João"; //declarando com valor
var nome = 0; //permite redeclarar


function calculo(){
	let x = 0;
	x = 1; //posso, é válido
}
x = 2; //não posso, está fora do bloco


function calculo2(){
	var y = 0;
	y = 1; //posso
}
y = 2; //posso 
var y = "Ana"; //posso


// Variáveis Const - são constantes, não mudam valor
const PI = 3.141592;
PI = 3.14; //não posso reatribuir valor
PI = 3.14 + 2; //não posso incrementar


//Operadores de Atribuição
let num = 1; //simbolo de = é usado para atribuir valor
num == 2; // símbolo de == é para testar igualdade. Nesse caso dá falso


//Tipos de Dados
const pi = 3.14; //numeral decimal: float
let nome = "João"; //Texto: String
let numero = 1; //Número inteiro: int
let numero2 = "1"; //String, pois usa aspas

//Declarando em uma linha só, pode
let nome = "João", sobrenome = "Rosa", cidade = "Feliz";

//Variável com valor Indefinido
let nome; //não atribui valor quando declara, ela é valor indefinido
nome = "Ana"; //definiu valor


