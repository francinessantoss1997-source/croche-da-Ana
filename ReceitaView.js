export class ReceitaView {

static render(receitas){

const container = document.getElementById("receitas")

receitas.forEach(receita => {

const div = document.createElement("div")

div.innerHTML = `

<h3>${receita.nome}</h3>

<p>${receita.descricao}</p>

`

container.appendChild(div)

})

}

}
