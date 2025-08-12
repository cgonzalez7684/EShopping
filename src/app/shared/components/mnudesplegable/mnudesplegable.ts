import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mnudesplegable',
  standalone:true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './mnudesplegable.html',
  styleUrl: './mnudesplegable.css'
})
export class Mnudesplegable {

}
