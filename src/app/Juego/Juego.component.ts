import { Component, Input, OnInit } from '@angular/core';
import { FormNumeroComponent } from "./formNumero/formNumero.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-Juego',
  templateUrl: './Juego.component.html',
  styleUrls: ['./Juego.component.css'],
  imports: [FormNumeroComponent, NgIf]
})
export class JuegoComponent implements OnInit {
  numeroGanador: number = Math.floor(Math.random() * 100) + 1;
  numeroIntentos: number = 10;
  estado:number|null = null;
  constructor() { }

  ngOnInit() {
    console.log(this.numeroGanador);
  }

  evaluar(numeroSeleccionado: number) {
    if (this.numeroIntentos > 0 && this.estado!== 0) {
        if (numeroSeleccionado == this.numeroGanador) {
        this.estado = 0;
      } else if (numeroSeleccionado < this.numeroGanador) {
        this.estado = -1;
      } else {
        this.estado = 1;
      }
      this.numeroIntentos--;
      }
  }

}
