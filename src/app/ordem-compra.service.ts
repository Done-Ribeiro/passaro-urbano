import { Pedido } from "./shared/pedido.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable()
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido): void {
    console.log(pedido)
  }
}
