import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { Restaurante } from './restaurante'

import { RestauranteService } from './../restaurante.service'


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  exibirTemplateResultado = false
  nameFiltro: string = ''
  restaurantes: Restaurante[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _restauranteService: RestauranteService) { }

  ngOnInit() {
    this.buscarRestaurantes()
    this.exibirTemplateResultado = true
  }

  apagarRestaurante(id: number) {
    this._restauranteService
      .deleteRestaurante(id)
      .subscribe(
        response => {
          if (response.RestauranteId > 0) {
            this._restauranteService
              .getRestaurantes(this.nameFiltro)
              .subscribe(data => this.restaurantes = data)
            alert("Restaurante removido com sucesso.")
          } else {
            alert("Não foi possível remover o restaurante!")
          }
        }
      )
  }

  buscarRestaurantes() {
    this._restauranteService
      .getRestaurantes(this.nameFiltro)
      .subscribe(data => {
        this.restaurantes = data
      })
  }
}