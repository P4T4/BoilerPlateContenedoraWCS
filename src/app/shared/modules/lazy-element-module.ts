import { NgModule } from '@angular/core';
import { LazyElementDirective } from '../directives/lazy-element.directive';

@NgModule({
  declarations: [LazyElementDirective],
  exports: [LazyElementDirective],
})
export class LazyElementModule {}
