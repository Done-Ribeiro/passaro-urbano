import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model'

class CarrinhoService {
  public itens: ItemCarrinho[] = []

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }

  public incluirItem(oferta: Oferta): void {
    // console.log('Oferta recebida no servico: ', oferta)
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )

    //verificar se o item em questão já não existe dentro de this.itens
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    //o find acima, retorna uma referencia para o itemCarrinho (encontrado)

    if (itemCarrinhoEncontrado) {
      //nesse caso, ele existe dentro do array de itens
      //vamos recuperar a referencia dele, e somar a quantidade
      itemCarrinhoEncontrado.quantidade++
    } else {
      this.itens.push(itemCarrinho)
    }

  }

  public totalCarrinhoCompras(): number {
    let total: number = 0

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade)
    })

    return total
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    //incrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade++
    }
  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    //decrementar quantidade
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade--
    }
  }

}

export { CarrinhoService }
