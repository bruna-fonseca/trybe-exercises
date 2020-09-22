//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

let n = 5;
let asterisco = "*";
let linha;
let input = "";

for (linha = 0; linha < n; linha++) {
  input = input + asterisco;
}
for  (linha = 0; linha < n; linha++) {
    console.log(input);
}