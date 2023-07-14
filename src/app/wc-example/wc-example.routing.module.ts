import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcExampleComponent } from './component/wc-example.component';

export const ROUTES_WC_EXAMPLE: Routes = [
  { path: '', component: WcExampleComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES_WC_EXAMPLE)],
  exports: [RouterModule],
})
export class WcExampleRoutingModule {}
