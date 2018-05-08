import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { Restaurante } from './../restaurante'

import { RestauranteService } from './../../restaurante.service'

@Component({
  selector: 'app-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  private restaurante: Restaurante = new Restaurante()
  title: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _restauranteService: RestauranteService
  ) { }

  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      var id = params['id']

      this.title = id ? 'Editar Restaurante' : 'Novo Restaurante'

      if (!id)
        return

      this._restauranteService
        .getRestaurante(id)
        .subscribe(
          data => this.restaurante = data,
          response => {
            if (response.status == 404) {
              alert("Restaurante inexistente!")
            } else if (response.status == 400) {
              alert("Erro na solicitação!")
            }
          })
    })
  }

  salvarRestaurante() {
    if (this.restaurante.RestauranteId && this.restaurante.RestauranteId > 0) {

      // Atualiza restaurante
      this._restauranteService
        .putRestaurante(this.restaurante)
        .subscribe(
          response => {
            if (response.RestauranteId > 0) {
              this.router.navigate(['restaurante'])
              alert("Restaurante atualizado com sucesso.")
            } else if (response.status == 400) {
              alert("Erro ao atualizar o restaurante!")
            }
          }
        )
    } else {

      // Cadastra novo restaurante
      this._restauranteService
        .postRestaurante(this.restaurante)
        .subscribe(
          response => {
            if (response.RestauranteId > 0) {
              this.router.navigate(['restaurante'])
              alert("Restaurante cadastrado com sucesso.")
            } else if (response.Status == 100) {
              alert("Restaurante já cadastrado!")
            } else if (response.Status == 400) {
              alert("Erro ao cadastrar o restaurante!")
            }
          }
        )
    }
  }

}