import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarNumeroPageRoutingModule } from './verificar-numero-routing.module';

import { VerificarNumeroPage } from './verificar-numero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarNumeroPageRoutingModule
  ],
  declarations: [VerificarNumeroPage]
})
export class VerificarNumeroPageModule {}
