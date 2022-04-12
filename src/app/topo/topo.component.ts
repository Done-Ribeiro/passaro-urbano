import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'

import { Observable } from 'rxjs'
import { Oferta } from '../shared/oferta.model'

import { Subject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { debounceTime } from 'rxjs/operators'

import { of } from 'rxjs'

import { distinctUntilChanged } from 'rxjs/operators'

import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  public ofertas2!: Oferta[]

  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(//retorno Oferta[]
      debounceTime(1000),//executa a ação do switchMap após 1s
      distinctUntilChanged(),//para fazer pesquisar distintas
      switchMap((termo: string) => {
        console.log('requisição http para api')

        //* se a pesquisa, for uma string vazia
        if (termo.trim() === '') {
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError((erro: any) => {
        console.log(erro)
        //encaminhamos tbm um observable com array vazio
        //desta forma, apesar da notificação, nossa aplicação não quebra
        return of<Oferta[]>([])
      })
    )

    //! aqui eh onde é feita a chamada do nosso observable -> this.ofertas
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
      this.ofertas2 = ofertas//? aqui é a associação do array de ofertas
    })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }

}
