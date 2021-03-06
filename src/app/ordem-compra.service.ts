import { Pedido } from "./shared/pedido.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { Observable } from "rxjs"
import { URL_API } from "./app.api"
import { HttpHeaders } from "@angular/common/http"
import { map } from "rxjs/operators"

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let options = { headers }

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      options
    ).pipe(
      map((resposta: any) => resposta.id)
    )
  }
}
