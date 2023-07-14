import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementModule } from './modules/lazy-element-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LazyElementModule],
  exports: [LazyElementModule],
})
export class SharedModule {}
