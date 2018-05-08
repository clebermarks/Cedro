import { CommonModule } from '@angular/common'
import { CurrencyMaskModule } from "ng2-currency-mask"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PratoComponent } from './prato.component'
import { PratoDetalheComponent } from './prato-detalhe/prato-detalhe.component'

import { PratoService } from './../prato.service'

@NgModule({
  imports: [
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    PratoComponent,
    PratoDetalheComponent
  ],
  providers: [PratoService],
  exports: [PratoDetalheComponent]
})
export class PratoModule { }
