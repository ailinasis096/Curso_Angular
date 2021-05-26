import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';

@NgModule({
  declarations: [ // declaraciones: Componentes que vamos a usar
    AppComponent,
    TitulosComponent
  ],
  imports: [ // Pluggins que vamos a usar
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // Crear Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
