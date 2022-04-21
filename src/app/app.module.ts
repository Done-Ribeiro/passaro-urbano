import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//ROTAS
// import { RouterModule } from '@angular/router'
// import { ROUTES } from '@angular/router'
import AppRoutingModule from './app.routes'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

//Adicionando Localizade BRASIL para a aplicacão
import { LOCALE_ID } from '@angular/core'
import localePtBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePtBr)
//

//pipe
import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

// //FormsModule
// import { FormsModule } from '@angular/forms'

//ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms'

import { CarrinhoService } from './carrinho.service'
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
//pipe
    DescricaoReduzida,
//
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,
    //ROTAS angular 7+
    AppRoutingModule,
  ],
// Adicionando Localizade BRASIL para a aplicacão
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-Br' },
    //servico no escopo do modulo
    CarrinhoService
  ],
//
  bootstrap: [AppComponent]
})
export class AppModule { }
