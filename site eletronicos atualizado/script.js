function mostrarPagamento(){

let pagamento = document.querySelector('input[name="pagamento"]:checked').value;

document.getElementById("pix-area").style.display = "none";
document.getElementById("cartao-area").style.display = "none";
document.getElementById("boleto-area").style.display = "none";

if(pagamento === "pix"){
document.getElementById("pix-area").style.display = "block";
}

if(pagamento === "cartao"){
document.getElementById("cartao-area").style.display = "block";
}

if(pagamento === "boleto"){
document.getElementById("boleto-area").style.display = "block";
}

}function gerarBoleto(){
alert("Boleto gerado com sucesso");
}
let valorCompra = 3700.99;

document.getElementById("valor-compra").innerText = "R$ " + valorCompra;

let qr = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=pagamento-" + valorCompra;

document.getElementById("qr-pix").src = qr;
function pagarCartao(){

let numero = document.getElementById("numero-cartao").value;
let nome = document.getElementById("nome-cartao").value;
let validade = document.getElementById("validade-cartao").value;
let cvv = document.getElementById("cvv-cartao").value;

if(numero === "" || nome === "" || validade === "" || cvv === ""){
alert("Preencha todos os dados do cartão");
return;
}

alert("Pagamento aprovado!");
}function finalizarCompra(){

let numeroPedido = Math.floor(Math.random() * 1000000);

document.getElementById("numero-pedido").innerText = numeroPedido;

document.querySelector(".checkout").style.display = "none";

document.getElementById("pedido-confirmado").style.display = "block";

}
