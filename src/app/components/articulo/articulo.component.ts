import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent implements OnInit {
  inputNombre: string = '';
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) {}

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'Camiseta',
        descripcion: 'Polyester',
        precio: 20,
      },
      {
        nombre: 'Remera manga corta',
        descripcion: 'Algodón',
        precio: 15,
      }
    );
  }
  agregarNombre(evento: any) {
    this.inputNombre = evento.target.value;
  }

  cambiarInput() {
    this.inputNombre = '';
    console.log(this.inputNombre);
  }
  pasarParametros(articuloRecibido: Articulo) {
    this.ruta.navigate([
      'detalle-articulo',
      { articulo: JSON.stringify(articuloRecibido) },
    ]);
  }
}
