import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone:true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  onButtonClick(event: Event) {
    event.preventDefault();
    console.log('¡El botón fue clickeado!');
    alert('Evento ejecutado');
  }

}
