import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import { Observable } from 'rxjs'
import { interval } from 'rxjs'
import { Observer } from 'rxjs'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => this.oferta = oferta)


    //observable (observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(3)
      // observer.error('algum erro foi encontrado na strem de eventos')
      observer.complete()
    })

    //observable (observador)
    meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
  }

}
