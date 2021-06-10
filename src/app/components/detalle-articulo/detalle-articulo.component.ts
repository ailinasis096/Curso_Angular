import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css'],
})
export class DetalleArticuloComponent implements OnInit {
  nombre: string = '';
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {

  }
}
