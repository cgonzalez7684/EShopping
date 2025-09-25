import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mnudesplegable } from './shared/components/mnudesplegable/mnudesplegable';
import { Selectcheck } from "./shared/components/selectcheck/selectcheck";
import { Slidermonto } from "./shared/components/slidermonto/slidermonto";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Mnudesplegable, Selectcheck, Slidermonto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EShopping2');
}
