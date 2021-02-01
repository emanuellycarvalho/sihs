import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarNumeroPage } from './verificar-numero.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarNumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarNumeroPageRoutingModule {}
