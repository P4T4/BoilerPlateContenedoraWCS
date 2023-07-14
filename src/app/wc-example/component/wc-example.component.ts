import { Component } from '@angular/core';
import { RutasWc } from 'src/app/shared/rutas-wc/rutas-wc';

@Component({
  selector: 'app-wc-example',
  templateUrl: './wc-example.component.html',
  styleUrls: ['./wc-example.component.scss'],
})
export class WcExampleComponent {
  readonly WebComponent: string = RutasWc.EXAMPLE;
}
