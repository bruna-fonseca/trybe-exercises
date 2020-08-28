let productCost = 0;
let saleValue = 3;

if (productCost > 0 && saleValue > 0) {
    let totalProductCost = productCost * 0.2;
    let profit = saleValue - totalProductCost * 1000;
    console.log(profit);
}
else {
    console.log("Erro, valores inválidos");
}