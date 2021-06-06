import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent implements OnInit {
  mostrar: Boolean = true;
  apellidoAlumno: string = '';
  nombreAlumno: string = '';
  alumno: any = [];
  fecha:Date = new Date('06-05-2021');
  constructor() {}

  ngOnInit(): void {}
  agregarApellido(evento: any) {
    this.apellidoAlumno = evento.target.value;
  }
  agregarNombre(evento: any) {
    this.nombreAlumno = evento.target.value;
  }
  agregarAlumno() {
    {
      this.nombreAlumno && this.agregarApellido
        ? this.alumno.push({
            nombreAlumno: this.nombreAlumno,
            apellidoAlumno: this.apellidoAlumno,
          })
        : alert('Faltan datos');
    }
    console.log(this.alumno);
    this.nombreAlumno = '';
    this.apellidoAlumno = '';
  }
}
