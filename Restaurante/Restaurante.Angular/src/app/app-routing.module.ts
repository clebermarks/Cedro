import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { PratoComponent } from './prato/prato.component'
import { PratoDetalheComponent } from './prato/prato-detalhe/prato-detalhe.component'
import { RestauranteComponent } from './restaurante/restaurante.component'
import { RestauranteDetalheComponent } from './restaurante/restaurante-detalhe/restaurante-detalhe.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'prato', component: PratoComponent },
  { path: 'prato/novo', component: PratoDetalheComponent },
  { path: 'pratoEditar/:id', component: PratoDetalheComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'restaurante/novo', component: RestauranteDetalheComponent },
  { path: 'restauranteEditar/:id', component: RestauranteDetalheComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
