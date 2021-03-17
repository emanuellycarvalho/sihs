import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaAddPageRoutingModule } from './conta-add-routing.module';

import { ContaAddPage } from './conta-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaAddPageRoutingModule
  ],
  declarations: [ContaAddPage]
})
export class ContaAddPageModule {}
