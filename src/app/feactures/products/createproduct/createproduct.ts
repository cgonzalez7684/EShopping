import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-createproduct',
  imports: [MatButtonModule],
  templateUrl: './createproduct.html',
  styleUrl: './createproduct.css'
})
export class Createproduct {
  onButtonClick(event: Event) {
    event.preventDefault();
    console.log('¡El botón fue clickeado!');
    alert('Evento ejecutado');
  }
}
