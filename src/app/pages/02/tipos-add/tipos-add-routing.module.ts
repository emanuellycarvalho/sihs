import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposAddPage } from './tipos-add.page';

const routes: Routes = [
  {
    path: '',
    component: TiposAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposAddPageRoutingModule {}
