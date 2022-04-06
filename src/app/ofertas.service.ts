import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    //efetuar uma requisição http
    return this.http.get('http://localhost:3000/ofertas')//retorna um observable, e por enquanto.. vamos converter para Promise
      .toPromise()//converte Observable para Promise
      .then((resposta: any) => resposta)//retornar uma promessa, contendo um Oferta[]
  }

}
