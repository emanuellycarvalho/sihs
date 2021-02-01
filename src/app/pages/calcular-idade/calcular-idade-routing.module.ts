import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularIdadePage } from './calcular-idade.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularIdadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularIdadePageRoutingModule {}
