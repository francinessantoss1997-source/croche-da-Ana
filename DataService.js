import { Produto } from "../models/Produto.js"
import { Receita } from "../models/Receita.js"

export class DataService {

static getProdutos(){

return [

new Produto(
"Bolsa de Crochê",
80,
"https://images.unsplash.com/photo-1582562124811-c09040d0a901"
),

new Produto(
"Amigurumi",
60,
"https://images.unsplash.com/photo-1590086782957-93c06ef21604"
),

new Produto(
"Sousplat",
40,
"https://images.unsplash.com/photo-1610701596007-11502861dcfa"
)

]

}

static getReceitas(){

return [

new Receita(
"Flor simples",
"Faça 6 correntinhas e feche com ponto baixíssimo."
),

new Receita(
"Tapete básico",
"Comece com anel mágico e faça 12 pontos altos."
)

]

}

}
