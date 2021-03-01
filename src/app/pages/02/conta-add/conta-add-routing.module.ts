import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaAddPage } from './conta-add.page';

const routes: Routes = [
  {
    path: '',
    component: ContaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaAddPageRoutingModule {}
