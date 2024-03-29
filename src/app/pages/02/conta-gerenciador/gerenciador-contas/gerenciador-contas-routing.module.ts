import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciadorContasPage } from './gerenciador-contas.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciadorContasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciadorContasPageRoutingModule {}
