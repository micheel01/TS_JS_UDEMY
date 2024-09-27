//dados primitivos string, number, undefined, null, boolean, symbol

const nome = 'Michel'; //string
const nome1 = "Michel"; //string 
const nome2 = `Michel`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = nao aponta para local nenhum na memoria
const sobrenomeAluno = null; //Nulo -> nao aponta para local nenhum na memoria
const boolean = true;  //bool = true or false (valor logico)
const aprovado = false;

//typeof para chegar o tipo de dado 
console.log(typeof nome, nome);
console.log(typeof aprovado);

//valores por referencia
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);




