import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css'],
})
export class DetalleArticuloComponent implements OnInit {
  articulos!: Articulo;
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    this.articulos = JSON.parse(this.ruta.snapshot.params.articulo)
    console.log(this.articulos)
  }
}
