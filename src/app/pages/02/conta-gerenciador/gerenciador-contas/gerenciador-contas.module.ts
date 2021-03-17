import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciadorContasPageRoutingModule } from './gerenciador-contas-routing.module';

import { GerenciadorContasPage } from './gerenciador-contas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciadorContasPageRoutingModule
  ],
  declarations: [GerenciadorContasPage]
})
export class GerenciadorContasPageModule {}
