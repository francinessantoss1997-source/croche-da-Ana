export class ProdutoView {

static render(produtos){

const container = document.getElementById("produtos")

produtos.forEach(produto => {

const card = document.createElement("div")

card.className = "card"

card.innerHTML = `

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p style="padding:10px">
R$ ${produto.preco}
</p>

`

container.appendChild(card)

})

}

}
