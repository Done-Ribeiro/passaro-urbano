import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"
import { URL_API } from './app.api'

@Injectable()
export class OfertasService {

  // private url_api = 'http://localhost:3000/ofertas'

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    //efetuar uma requisição http
    return this.http.get(`${URL_API}?destaque=true`)//retorna um observable, e por enquanto.. vamos converter para Promise
      .toPromise()//converte Observable para Promise
      .then((resposta: any) => resposta)//retornar uma promessa, contendo um Oferta[]
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0]//retorna a oferta, e nao um array de ofertas
      })
  }

}
