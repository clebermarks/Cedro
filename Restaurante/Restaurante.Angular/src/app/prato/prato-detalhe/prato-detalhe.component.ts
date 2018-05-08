import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { Prato } from './../prato'
import { Restaurante } from './../../restaurante/restaurante'

import { PratoService } from './../../prato.service'
import { RestauranteService } from './../../restaurante.service'


@Component({
  selector: 'app-prato-detalhe',
  templateUrl: './prato-detalhe.component.html'
})
export class PratoDetalheComponent implements OnInit {

  restaurantes: Restaurante[] = []
  prato: Prato = new Prato()
  title: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _pratoService: PratoService,
    private _restauranteService: RestauranteService
  ) { }

  ngOnInit() {

    // Busca restaurante
    this._restauranteService
      .getRestaurantes('')
      .subscribe(data => {
        this.restaurantes = data
      })

    var id = this.route.params
      .subscribe(params => {
        var id = params['id']

        this.title = id ? 'Editar Prato' : 'Novo Prato'

        if (!id)
          return

        this._pratoService
          .getPrato(id)
          .subscribe(
            data => this.prato = data,
            response => {
              if (response.status == 404) {
                alert("Prato inexistente!")
              } else if (response.status == 100) {
                alert("Prato já cadastrado!")
              } else if (response.status == 400) {
                alert("Erro na requisição!")
              }
            })
      })
  }

  salvarPrato() {
    if (this.prato.Id && this.prato.Id > 0) {

      // Atualiza prato      
      this._pratoService
        .putPrato(this.prato)
        .subscribe(
          response => {
            if (response.Id > 0) {
              this.router.navigate(['prato'])
              alert("Prato atualizado com sucesso.")
            } else if (response.Status == 400) {
              alert("Erro ao atualizar o prato!")
            }
          }
        )
    } else {

      // Cadastra novo prato      
      this._pratoService
        .postPrato(this.prato)
        .subscribe(
          response => {
            if (response.Id > 0) {
              this.router.navigate(['prato'])
              alert("Prato cadastrado com sucesso.")
            } else if (response.Status == 100) {
              alert("Prato já cadastrado!")
            } else if (response.Status == 400) {
              alert("Erro ao cadastrar o prato!")
            }
          }
        )
    }
  }

}
