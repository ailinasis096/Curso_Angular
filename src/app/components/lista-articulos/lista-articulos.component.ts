import { Component, OnInit } from '@angular/core';

interface Articulos{
  id: number;
  descripcion: string;
  codigo: string;
  cantidad: number;
  precio: number;
  puntaje: number;
  imagen: string;
  fechaIngreso: Date;

}
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  constructor() {}
  mostrarDatos: Boolean = true;
  titulo: string = "Titulo Inicial";
  articulos: Array<Articulos> = [
    {
      id: 1,
      descripcion: 'Remera',
      codigo: '154as6df',
      cantidad: 10,
      precio: 10.3,
      puntaje: 5,
      imagen: '../../../assets/images/spiderman.jpeg',
      fechaIngreso: new Date('03/06/2021'),
    },
    {
      id: 2,
      descripcion: 'Zapatilla',
      codigo: '154as6df123',
      cantidad: 101,
      precio: 1088.3,
      puntaje: 4,
      imagen:
        'https://comunidad.iebschool.com/iebs/files/2016/02/Taco_Party_4.gif',
      fechaIngreso: new Date('03/05/2021'),
    },
  ];

  url: string =
    'https://comunidad.iebschool.com/iebs/files/2016/02/Taco_Party_4.gif';
  mostrar: boolean = false;
  ngOnInit(): void {}

  mostrarEsconderImagen() {
    this.mostrarDatos = !this.mostrarDatos;
    console.log(this.mostrarDatos);
  }
  onPuntajeClicked(mensaje: string): void {
    this.titulo = 'Lista de Artículos - ' + mensaje;
  }
}
