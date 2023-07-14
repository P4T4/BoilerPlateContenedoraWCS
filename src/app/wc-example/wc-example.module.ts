import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WcExampleComponent } from './component/wc-example.component';
import { RutasWc } from '../shared/rutas-wc/rutas-wc';
import { LazyElementModule } from '../shared/modules/lazy-element-module';
import { WcExampleRoutingModule } from './wc-example.routing.module';

@NgModule({
  declarations: [WcExampleComponent],
  imports: [CommonModule, LazyElementModule, WcExampleRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WcExampleModule {}
