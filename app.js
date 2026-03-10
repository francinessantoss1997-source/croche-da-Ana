import { DataService } from "./services/DataService.js"
import { ProdutoView } from "./views/ProdutoView.js"
import { ReceitaView } from "./views/ReceitaView.js"

class App {

static start(){

const produtos = DataService.getProdutos()

const receitas = DataService.getReceitas()

ProdutoView.render(produtos)

ReceitaView.render(receitas)

}

}

App.start()
