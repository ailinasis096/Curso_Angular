import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { DetalleArticuloComponent } from './components/detalle-articulo/detalle-articulo.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { PipePropioPipe } from './components/pipes/pipe-propio.pipe';
import { TitulosComponent } from './components/titulos/titulos.component';
import { AgregarUsuariosComponent } from './components/usuario/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './components/usuario/editar-usuarios/editar-usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: TitulosComponent, // Es el nombre de la clase.
  },
  {
    path: 'pipes',
    component: PipePropioPipe,
  },
  {
    path: 'listado-articulo',
    component: ListaArticulosComponent,
  },
  {
    path: 'listado-alumno',
    component: ListadoAlumnosComponent,
  },
  {
    path: 'usuarios',
    component: UsuarioComponent, children: [{
      path: 'agregar-usuarios',
      component: AgregarUsuariosComponent
    },
      {
        path: 'editar-usuario',
        component: EditarUsuariosComponent
      }
    ]
  },
  {
    path: 'articulo',
    component: ArticuloComponent
  },
  {
    path: 'detalle-articulo',
    component: DetalleArticuloComponent
  },
  {
    path: '**',
    component: PaginaErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
