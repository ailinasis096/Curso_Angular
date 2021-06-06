import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { PipePropioPipe } from './components/pipes/pipe-propio.pipe';

@NgModule({
  declarations: [ // declaraciones: Componentes que vamos a usar
    AppComponent,
    TitulosComponent,
    ListaArticulosComponent,
    ListadoAlumnosComponent,
    PipePropioPipe
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
