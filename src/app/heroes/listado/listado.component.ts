import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Chupacabras', 'Aquaman'];
  heroeBorrado: string = '';
  constructor() {}

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
