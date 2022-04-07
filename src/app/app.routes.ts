//ROTAS Angular 7+
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: OfertaComponent },
]

//ROTAS Angular 7+
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
