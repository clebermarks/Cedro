import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { RestauranteComponent } from './restaurante.component'
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component'

import { RestauranteService } from './../restaurante.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    RestauranteComponent,
    RestauranteDetalheComponent
  ],
  providers: [RestauranteService],
  exports: [RestauranteDetalheComponent]
})
export class RestauranteModule { }
