const body = document.querySelector("body");


const main = document.createElement("main");
const section = document.createElement("section");
const description = document.createElement("ul");
const itens = document.createElement("ul");
const soma = document.createElement("ul");
const button = document.createElement("button");
const descriptionli = document.createElement("li");
const descriptionli2 = document.createElement("li");
const itensli = document.createElement("li");
const itensli2 = document.createElement("li");
const somali = document.createElement("li");
const somali2 = document.createElement("li");


description.id = ("description");
itens.classList = ("itens");
soma.id = ("soma");
somali2.id = ("li2")


body.appendChild(main);
main.appendChild(section)
section.appendChild(description)
section.appendChild(itens)
itens.appendChild(itensli)
itens.appendChild(itensli2)
main.appendChild(soma)
soma.appendChild(somali)
soma.appendChild(somali2)
main.appendChild(button)

button.innerText = "Finalizar compra"
itensli.innerText = "Item"
itensli2.innerText = "Valor"
somali.innerText = "Total"
somali2.innerText = ""


const produtos = [
    {
        id: "Chiclete",
        name: "Chiclete",
        price: 3.00
    },
    {
        id: "Chocolae Garoto",
        name: "Chocolate Garoto",
        price: 5.00
    },
    {
        id: "Fini",
        name: "Fini",
        price: 6.00
    },
    {
        id: "Cocada",
        name: "Cocada",
        price: 7.00
    },
    {
        id: "Bala Halls",
        name: "Bala Halls",
        price: 2.00
    }
]

for(let i = 0; i < produtos.length; i++){
    const figureCard = createCard(produtos[i])
    section.appendChild(figureCard)
}
function createCard(card){
    const itens = document.createElement("ul");
    itens.classList = "itens"
    const itensli = document.createElement("li");
    const itensli2 = document.createElement("li");
    itensli.innerText = card.name
    itensli2.innerText = card.price
 itens.appendChild(itensli)
 itens.appendChild(itensli2)
    return itens
}
function CarrinhoCompras (item) {
    const li2 = document.getElementById("li2")
    let resultado = 0;
    for(let i = 0; i < item.length; i++){
       resultado = resultado + produtos[i].price

    }
    somali2.innerText = resultado
    return result = soma
}
CarrinhoCompras(produtos)
