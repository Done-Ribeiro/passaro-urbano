//ROTAS Angular 7+
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
]

//ROTAS Angular 7+
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export default class AppRoutingModule { }
