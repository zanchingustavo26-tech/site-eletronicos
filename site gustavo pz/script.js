function mostrarPagamento(){

    let pagamento = document.querySelector('input[name="pagamento"]:checked').value;
    
    document.getElementById("pix-area").style.display = "none";
    document.getElementById("cartao-area").style.display = "none";
    document.getElementById("boleto-area").style.display = "none";
    
    if(tipo === "pix"){
        document.getElementById("pix").style.display="block";
        gerarPix();
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
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco, imagem){

carrinho.push({nome, preco, imagem});

localStorage.setItem("carrinho", JSON.stringify(carrinho));

alert("Produto adicionado ao carrinho!");

}
function irPagamento(){

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
    window.location.href = "pagamento.html";
    
    }
    function carregarPagamento(){

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        
        let lista = document.getElementById("lista-produtos");
        let total = 0;
        
        lista.innerHTML = "";
        
        carrinho.forEach(produto => {
        
        lista.innerHTML += `
        <p>${produto.nome} - R$ ${produto.preco}</p>
        `;
        
        total += produto.preco;
        
        });
        
        document.getElementById("total").innerText = total.toFixed(2);
        
        }
        function finalizarCompra(){

            localStorage.removeItem("carrinho");
            
            alert("Compra realizada com sucesso!");
            
            window.location.href = "index.html";
            
            }
            function atualizarContador(){
                let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
                document.getElementById("contador").innerText = carrinho.length;
                }
                
                atualizarContador();
                function calcularFrete(){

                    let cep = document.getElementById("cep").value;
                    
                    if(cep.length < 8){
                    alert("Digite um CEP válido");
                    return;
                    }
                    
                    let frete = Math.floor(Math.random() * 50) + 10;
                    
                    document.getElementById("valorFrete").innerText = "Frete: R$ " + frete;
                    
                    }
                    function carregarParcelas(){

                        let total = parseFloat(document.getElementById("total").innerText);
                        
                        let select = document.getElementById("parcelas");
                        
                        for(let i=1; i<=12; i++){
                        let valor = (total / i).toFixed(2);
                        
                        select.innerHTML += `<option>${i}x de R$ ${valor}</option>`;
                        }
                        
                        }
                        function gerarPix(){

let total = document.getElementById("total").innerText;

let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX-" + total;

document.getElementById("qr-pix").src = url;

}
function gerarPix(){

    let total = document.getElementById("total").innerText;
    
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX-" + total;
    
    document.getElementById("qr-pix").src = url;
    
    }
    function mostrarPagamento(tipo){

        document.getElementById("pix").style.display="none";
        document.getElementById("cartao").style.display="none";
        document.getElementById("boleto").style.display="none";
        
        document.getElementById(tipo).style.display="block";
        
        if(tipo === "pix"){
        gerarPix();
        }
        
        }
        function gerarPix(){

            let total = document.getElementById("total").innerText;
            
            let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX-" + total;
            
            document.getElementById("qr-pix").src = url;
            
            }
            function mostrarPagamento(tipo){

                document.getElementById("pix").style.display="none";
                document.getElementById("cartao").style.display="none";
                document.getElementById("boleto").style.display="none";
                
                document.getElementById(tipo).style.display="block";
                
                if(tipo === "pix"){
                gerarPix();
                }
                
                }
                function finalizarCompra(){

                    alert("Compra realizada com sucesso!");
                    
                    localStorage.removeItem("carrinho");
                    
                    window.location.href = "index.html";
                    
                    }
                    function abrirCarrinho(){
                        document.getElementById("carrinho-lateral").classList.add("ativo");
                        carregarCarrinho();
                        }
                        
                        function fecharCarrinho(){
                        document.getElementById("carrinho-lateral").classList.remove("ativo");
                        }
                        
                        function carregarCarrinho(){
                        
                        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
                        
                        let lista = document.getElementById("itens-carrinho");
                        let total = 0;
                        
                        lista.innerHTML = "";
                        
                        carrinho.forEach(p => {
                        lista.innerHTML += `<p>${p.nome} - R$ ${p.preco}</p>`;
                        total += p.preco;
                        });
                        
                        document.getElementById("total-carrinho").innerText = total.toFixed(2);
                        
                        }
                        function finalizarCompra(){

                            let numero = Math.floor(Math.random()*100000);
                            
                            document.getElementById("numero").innerText = numero;
                            
                            document.querySelector(".checkout").style.display="none";
                            
                            document.getElementById("pedido").style.display="block";
                            
                            localStorage.removeItem("carrinho");
                            
                            }
                            
                            function voltarLoja(){
                            window.location.href="index.html";
                            }