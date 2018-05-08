import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core'
import { PratoModule } from './prato/prato.module'
import { RestauranteModule } from './restaurante/restaurante.module'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    PratoModule,
    RestauranteModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
