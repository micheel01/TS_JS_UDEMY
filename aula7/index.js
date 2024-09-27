// nao pode criar Constantes com palavras reservadas
//Constantes precisam ter nomes significativos 
// nao pode começar Constantes com numero
// nao podem conter espaços ou traços
//nao pode modificar o valor de uma constante

const nome = 'Joao';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado, resultadoDuplicado, resultadoTriplicado);
console.log(primeiroNumero);

console.log(typeof(primeiroNumero));
console.log(typeof(resultadoTriplicado));
