import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'

import { Observable } from 'rxjs'
import { Oferta } from '../shared/oferta.model'

import { Subject, of } from 'rxjs'
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(//retorno Oferta[]
      debounceTime(1000),//executa a ação do switchMap após 1s
      distinctUntilChanged(),//para fazer pesquisar distintas
      switchMap((termo: string) => {
        //* se a pesquisa, for uma string vazia
        if (termo.trim() === '') {
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError((erro: any) => {
        //encaminhamos tbm um observable com array vazio
        //desta forma, apesar da notificação, nossa aplicação não quebra
        return of<Oferta[]>([])
      })
    )
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
