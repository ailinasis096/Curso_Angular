import {
  Component,
  OnChanges,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css'],
})
export class PuntajeComponent implements OnInit, OnChanges {
  @Input() puntaje!: number;
  puntajeAncho!: number;
  @Output() puntajeClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.puntajeAncho = (this.puntaje * 75) / 5;
  }
  onClick(): void {
    this.puntajeClicked.emit('El puntaje es: ' + this.puntaje);
  }
}
