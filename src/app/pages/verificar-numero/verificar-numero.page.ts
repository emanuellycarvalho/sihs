import { Component } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.page.html',
  styleUrls: ['./verificar-numero.page.scss'],
})
export class VerificarNumeroPage {
  numero: number; //declaração do atributo global

  constructor(public alertController: AlertController) { }

  //async == assíncrono
  async verificarParOuImpar() {
    if ((this.numero % 2) === 0)
      this.exibirAlert('é par, anjão');
    else
      this.exibirAlert('é ímpar, amg');
  }

  async exibirAlert(mensagem: string) {
    const alert = await this.alertController.create({ // o que eh esse await homem??//
      header: 'old que',
      message: mensagem,
      buttons: ['os fatos!']
    });

    await alert.present();
  }

  async verificarPrimo() {
    var mensagem = 'sim, né?';
    for (var i = 2; i < this.numero; i++) {
      if ((this.numero % i) === 0)
        mensagem = 'não, moreco!';
    }

    this.exibirAlert(mensagem);
  }

}
