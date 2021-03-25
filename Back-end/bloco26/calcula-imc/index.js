const readline = require('readline-sync');

function calcaularImc() {
  const weight = readline.questionFloat('Qual é o seu peso?: ')
  const height = readline.questionFloat('Qual é a sua altura: ')

  console.log(`\n Seu peso é ${weight} e tua altura é de ${height} \n`)

  const calculo = (weight / Math.pow(height, 2)).toFixed(2);

  console.log(`Seu IMC é de ${calculo}`);

  if (calculo < 18.5) {
    console.log('Você está abaixo do peso (magreza)');
    return;
  }
  if (calculo >= 18.5 && calculo < 24.9) {
    console.log('Peso normal');
    return;
  }
  if (calculo >= 25 && calculo < 29.9) {
    console.log('	Acima do peso (sobrepeso)');
    return;
  }
  if (calculo >= 30 && calculo < 34.9) {
    console.log('Obesidade grau I');
    return;
  }
  if (calculo >= 35 && calculo < 39.9) {
    console.log('Obesidade grau II');
    return;
  }
  if (calculo >= 40) {
    console.log('Obesidade graus III e IV');
    return;
  }
}

calcaularImc();