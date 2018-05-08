import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Restaurante } from './restaurante/restaurante'

import 'rxjs/add/operator/map'


@Injectable()
export class RestauranteService {

  private urlRestaurante: string = "http://localhost:50122/api/v1/public"

  constructor(private http: Http) { }

  getRestaurantes(name: string) {
    return this.http
      .get(this.urlRestaurante + '/restaurantes?name=' + name)
      .map(data => data.json())
  }

  getRestaurante(id) {
    return this.http
      .get(this.urlRestaurante + "/restaurantes" + "/" + id)
      .map(data => data.json())
  }

  putRestaurante(restaurante: Restaurante) {
    return this.http
      .put(this.urlRestaurante + "/putRestaurante", restaurante)
      .map(data => data.json())
  }

  postRestaurante(restaurante: Restaurante) {
    return this.http
      .post(this.urlRestaurante + "/postRestaurante", restaurante)
      .map(data => data.json())
  }

  deleteRestaurante(id: number) {
    return this.http
      .delete(this.urlRestaurante + "/deleteRestaurante" + "/" + id)
      .map(data => data.json())
  }
}