let chess = "knight"

switch (chess.toLocaleLowerCase()) {
    case "king": 
        console.log("Rei ---> uma casa para qualquer lado");
    break;
    case "queen":
        console.log("Rainha ---> qualquer casa para qualquer lado");
    break;
    case "knight":
        console.log("Cavalo ---> movimento em 'L' pode pular peças");
    break;
    case "rook":
        console.log("Torre ---> qualquer casa horizontal ou verticalmente");
    break;
    case "bishop":
        console.log("Bispo ---> apenas diagonal");
    break;
    case "pawn":
        console.log("Peão ---> apenas para frente");
    break;
    default:
        console.log("Peça inválida, não existente no xadrez");
    break;
}