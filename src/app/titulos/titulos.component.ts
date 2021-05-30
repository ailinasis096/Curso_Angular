import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos', //nombre con el que vamos a llamar a nuestro componente
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css'],
})
export class TitulosComponent implements OnInit {
  imagen: string =
    'https://i.blogs.es/476b22/huawei-mate-40-pro-06/1366_2000.jpg';
  inputNuevo: string = 'Hola todo bien';
  numero: number = 0;
  usuario: string= '';
  password: string='';


  constructor() {}

  ngOnInit(): void {
    //se ejecuta cuando la aplicación este iniciando
  }

  ingresar(){
    console.log(this.usuario)
    console.log(this.password)
  }
  escribirPassword(){
    console.log(this.password)
  }
  sumar(){
    this.numero += 1
    console.log(this.numero)
  }
  resta(){
    this.numero -= 1
    console.log(this.numero)
  }

  escribir(evento:any){
    console.log(evento.target.value)
  }
}
