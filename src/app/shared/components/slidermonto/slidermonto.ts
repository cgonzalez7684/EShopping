import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { Button } from "../button/button";

@Component({
  selector: 'app-slidermonto',
  imports: [MatSliderModule, Button],
  standalone:true,
  templateUrl: './slidermonto.html',
  styleUrl: './slidermonto.css'
})
export class Slidermonto {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
