import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { PipePropioPipe } from './components/pipes/pipe-propio.pipe';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AgregarUsuariosComponent } from './components/usuario/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/usuario/editar-usuarios/editar-usuarios.component';
import { PuntajeComponent } from './components/puntaje/puntaje.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';

@NgModule({
  declarations: [ // declaraciones: Componentes que vamos a usar
    AppComponent,
    TitulosComponent,
    ListaArticulosComponent,
    ListadoAlumnosComponent,
    PipePropioPipe,
    PaginaErrorComponent,
    EncabezadoComponent,
    UsuarioComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
    PuntajeComponent,
    ArticuloComponent,
    DetalleArticuloComponent
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
