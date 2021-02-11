import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaAddPageRoutingModule } from './pessoa-add-routing.module';

import { PessoaAddPage } from './pessoa-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaAddPageRoutingModule
  ],
  declarations: [PessoaAddPage]
})
export class PessoaAddPageModule {}
