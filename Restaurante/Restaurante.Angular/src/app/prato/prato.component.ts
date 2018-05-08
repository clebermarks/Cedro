import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { Prato } from './prato'

import { PratoService } from './../prato.service'


@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html'
})
export class PratoComponent implements OnInit {

  exibeTemplateResultado = false
  nameFiltro: string = ''
  pratos: Prato[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _pratoService: PratoService
  ) { }

  ngOnInit() {
    this.buscarPratos()
    this.exibeTemplateResultado = true
  }

  apagarPrato(id: number) {
    this._pratoService
      .deletePrato(id)
      .subscribe(
        response => {
        if (response.Id > 0) {
          this._pratoService
            .getPratos(this.nameFiltro)
            .subscribe(data => this.pratos = data)
          alert("Prato removido com sucesso.")
        } else {
          alert("Não foi possível remover o prato!")
        }
      })
  }

  buscarPratos() {
    this._pratoService
      .getPratos(this.nameFiltro)
      .subscribe(data => {
        this.pratos = data
      })
  }
}
