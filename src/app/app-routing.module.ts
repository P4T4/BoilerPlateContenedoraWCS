import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES_WC_EXAMPLE } from './wc-example/wc-example.routing.module';

const routes: Routes = [
  {
    path: 'portal',
    component: AppComponent,
    children: [...ROUTES_WC_EXAMPLE],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
