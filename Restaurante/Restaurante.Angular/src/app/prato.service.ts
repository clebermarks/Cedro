import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Prato } from './prato/prato'

import 'rxjs/add/operator/map'


@Injectable()
export class PratoService {

  private urlPratos: string = 'http://localhost:50122/api/v1/public'

  constructor(private http: Http) { }

  getPratos(name: string) {
    return this.http
      .get(this.urlPratos + '/pratos?name=' + name)
      .map(data => data.json())
  }

  getPrato(id) {
    return this.http
      .get(this.urlPratos + "/pratos" + "/" + id)
      .map(data => data.json())
  }

  putPrato(prato: Prato) {
    return this.http
      .put(this.urlPratos + "/putPrato", prato)
      .map(data => data.json())
  }

  postPrato(prato: Prato) {
    return this.http
      .post(this.urlPratos + "/postPrato", prato)
      .map(data => data.json())
  }

  deletePrato(id) {
    return this.http
      .delete(this.urlPratos + "/deletePrato" + "/" + id)
      .map(data => data.json())
  }
}