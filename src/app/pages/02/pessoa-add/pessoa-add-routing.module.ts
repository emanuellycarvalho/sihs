import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaAddPage } from './pessoa-add.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaAddPageRoutingModule {}
