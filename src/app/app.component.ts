import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  rockBands: string[] = ['Aerosmith', 'ACDC', 'Metallica', 'Pink Floyd', 'Nirvana', 'Korn'];
  bandaNueva = '';

  cambiarTitulo() {
    this.title = 'FEL';
  }

  addBand() {
    this.rockBands.push(this.bandaNueva);
    this.bandaNueva = '';
  }
}
