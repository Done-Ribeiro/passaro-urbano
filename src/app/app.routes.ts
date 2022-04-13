//ROTAS Angular 7+
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent },
    ]
  },
  { path: 'ordem-compra', component: OrdemCompraComponent }
]

//ROTAS Angular 7+
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
