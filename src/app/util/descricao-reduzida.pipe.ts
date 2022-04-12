import { Pipe, PipeTransform } from "@angular/core"

//para o angular poder entender o nosso pipe, precisamos decoralo
//e add o metadado name,
//desta forma agora o angular sabe que esta classe eh um pipe e nao mais um componente
@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, truncarEm: number): string {
    if (texto.length > truncarEm) {
      return texto.substr(0, truncarEm) + '...'
    }

    return texto
  }
}
