import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularIdadePageRoutingModule } from './calcular-idade-routing.module';

import { CalcularIdadePage } from './calcular-idade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularIdadePageRoutingModule
  ],
  declarations: [CalcularIdadePage]
})
export class CalcularIdadePageModule {}
