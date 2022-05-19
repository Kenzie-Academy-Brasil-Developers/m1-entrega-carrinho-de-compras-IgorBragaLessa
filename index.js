const tagbody= document.querySelector('body')
const stop1= document.createElement('p')
const stop2= document.createElement('p')
const tagMain= document.createElement('Main')
const h2= document.createElement('h2')
const tagUlListaProdutos  = document.createElement("ul")
const tagLiProdutoItem  = document.createElement("li")
const tagLi2ProdutoItem = document.createElement("li")
const tagLi3ProdutoItem  = document.createElement("li")
const tagLi4ProdutoItem = document.createElement("li")
const tagLi5ProdutoItem  = document.createElement("li")
const tagLi6ProdutoItem = document.createElement("li")
const tagLi7ProdutoItem  = document.createElement("li")
const tagLi8ProdutoItem = document.createElement("li")
const tagLi9ProdutoItem  = document.createElement("li")
const tagLi10ProdutoItem= document.createElement("li")
const button = document.createElement("button")
const tagSectionProdutosDetalhes = document.createElement("section")


tagbody.appendChild(tagMain)
tagMain.appendChild(h2)
tagMain.appendChild(tagUlListaProdutos)
tagUlListaProdutos.appendChild(tagLiProdutoItem)
tagUlListaProdutos.appendChild(tagLi2ProdutoItem)
tagUlListaProdutos.appendChild(tagLi3ProdutoItem)
tagUlListaProdutos.appendChild(tagLi4ProdutoItem)
tagUlListaProdutos.appendChild(tagLi5ProdutoItem)
tagUlListaProdutos.appendChild(tagLi6ProdutoItem)
tagUlListaProdutos.appendChild(tagLi7ProdutoItem)
tagUlListaProdutos.appendChild(tagLi8ProdutoItem)
tagUlListaProdutos.appendChild(tagLi9ProdutoItem)
tagUlListaProdutos.appendChild(tagLi10ProdutoItem)
tagSectionProdutosDetalhes.appendChild(stop1)
tagSectionProdutosDetalhes.appendChild(stop2)
tagSectionProdutosDetalhes.appendChild(button)
tagMain.appendChild(tagSectionProdutosDetalhes)


function compras(carrinho){
    for(i=0;i<carrinho.length; i++){
    const comprou = carrinho[i]
    const mercadoria = carrinho(comprou)
    carrinho.appendChild(mercadoria)
    }
}


const ProdutosEscolhidos = [
    {
        id: 0,
        name: "Chiclete",
        price: 2.00
    },
    {
        id: 1,
        name: "Chocolate",
        price: 5.00
    },
    {
        id: 2,
        name: "Bis",
        price: 0.50
    },
    {
        id: 3,
        name: "KIT KAT",
        price: 2.50
    },
    {
        id: 4,
        name: "Trident",
        price: 2.00
    },

]

let somaTotal= 0
function somaValor(){
    for(i=0;i< ProdutosEscolhidos.length; i++){
        somaTotal= somaTotal + ProdutosEscolhidos[i].price
    }
    return somaTotal.toFixed(2)
}

let nome= ProdutosEscolhidos[0].name
let preco= ProdutosEscolhidos[0].price
let nome2= ProdutosEscolhidos[1].name
let preco2= ProdutosEscolhidos[1].price
let nome3= ProdutosEscolhidos[2].name
let preco3= ProdutosEscolhidos[2].price
let nome4= ProdutosEscolhidos[3].name
let preco4= ProdutosEscolhidos[3].price
let nome5= ProdutosEscolhidos[4].name
let preco5= ProdutosEscolhidos[4].price

h2.innerHTML = "Depósito de Doces"
tagLiProdutoItem.innerHTML = `${nome}`
tagLi2ProdutoItem.innerHTML = `${preco}`
tagLi3ProdutoItem.innerHTML = `${nome2}`
tagLi4ProdutoItem.innerHTML = `${preco2}`
tagLi5ProdutoItem.innerHTML = `${nome3}`
tagLi6ProdutoItem.innerHTML = `${preco3}`
tagLi7ProdutoItem.innerHTML = `${nome4}`
tagLi8ProdutoItem.innerHTML = `${preco4}`
tagLi9ProdutoItem.innerHTML = `${nome5}`
tagLi10ProdutoItem.innerHTML = `${preco5}`

button.innerHTML = "Finalizar compra"


stop1.innerText = "Valor total"


button.addEventListener('click', apertar)
function apertar() {
stop2.textContent = somaValor(ProdutosEscolhidos)/2
 
}

console.log(somaValor(ProdutosEscolhidos))