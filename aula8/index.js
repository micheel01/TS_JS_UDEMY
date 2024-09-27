/* 
Michel de Oliveira tem 20 anos, pesa 60 kg, tem 1.74 de altura e seu imc é de ...
Michel nasceu em 2004
*/

const nome = 'Michel';
const sobrenome = 'de Oliveira';
const idade = 20;
const peso = 60 ;
const alturaMetros = 1.74; 
let imc = peso / (alturaMetros * alturaMetros);  // peso / (altura x altura)
let anoNascimento = 2024 - idade;

// metodos de impressao
console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso,'kg',
 'tem',alturaMetros, 'de altura e seu imc é de',imc );
console.log(nome,'nasceu em', anoNascimento);

// concatenação
console.log(nome + ' ' + sobrenome +  ' ' + 'tem' + ' ' + idade,'anos, pesa', peso + ' ' +'kg',
 'tem',alturaMetros, 'de altura e seu imc é de',imc );
console.log(nome,'nasceu em', anoNascimento);

// metodo mais moderno e mais correto
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaMetros} de altura e seu imc é de ${imc}` );
console.log(`${nome} nasceu em ${anoNascimento}`);








