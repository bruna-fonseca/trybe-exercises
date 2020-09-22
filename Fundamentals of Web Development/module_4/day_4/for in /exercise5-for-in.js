//objeto da Margarida com add do status recorrente
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };
//objeto do Tio Patinhas
let infoTio = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "último MacPatinhas",
  recorrente: "Sim",
};

for (let chave in info) {
//adicionar if para acrescentar "Ambos recorrentes" ao imprimir seus valores
if (info["recorrente"] === "Sim" && infoTio["recorrente"] === "Sim") {
  console.log("Ambos recorrentes")
} else {
  
}
  console.log(info[chave] +" e " + infoTio[chave]); 
}
