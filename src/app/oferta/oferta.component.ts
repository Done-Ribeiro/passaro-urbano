import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import { Params } from '@angular/router'

import { CarrinhoService } from '../carrinho.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta!: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    /**
     * ! fazer subscribe nos parametros da rota
     * * agora vamos combinar um subscribe com um observable
     * para que, a cada evento de modificação de parametros da rota
     * execute uma Promise
     * * e vamos encaminhar pra essa promise, o id atualizado da rota
     * ? (porque podemos combinar, observables com promises)
    */
    this.route.params.subscribe((parametros: Params) => {//fica escutando... quando algum parametro mudar, (no caso o id da rota)
      this.ofertasService.getOfertaPorId(parametros.id)//passa o novo parametro (id)
        .then(( oferta: Oferta ) => this.oferta = oferta)//e resolve a promise, atualizando o conteudo de this.oferta
    })//volta a ficar escutando, porque eh uma promise sendo resolvida dentro de um observable
  }

  ngOnDestroy(): void {
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())
  }

}
