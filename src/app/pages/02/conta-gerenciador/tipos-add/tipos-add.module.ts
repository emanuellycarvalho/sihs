import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposAddPageRoutingModule } from './tipos-add-routing.module';

import { TiposAddPage } from './tipos-add.page';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TiposAddPageRoutingModule
  ],
  declarations: [TiposAddPage]
})
export class TiposAddPageModule {}
