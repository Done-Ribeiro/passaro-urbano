import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"
import { URL_API } from './app.api'

import { Observable } from 'rxjs'
//Angular 7+
import { map } from 'rxjs/operators'

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    //efetuar uma requisição http
    return this.http.get(`${URL_API}/ofertas?destaque=true`)//retorna um observable, e por enquanto.. vamos converter para Promise
      .toPromise()//converte Observable para Promise
      .then((resposta: any) => resposta)//retornar uma promessa, contendo um Oferta[]
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0]//retorna a oferta, e nao um array de ofertas
      })
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta[0].descricao)
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta=${termo}`)
    //converter retorno do observable do metodo get, em um objeto literal, que eh o que esperamos emitir
    //Angular 7+ (pipe(map))
      .pipe(map((resposta: any) => resposta.json()))
  }

}
