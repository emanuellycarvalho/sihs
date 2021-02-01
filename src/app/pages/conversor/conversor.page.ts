import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {
  unidadeDe: string;
  unidadePara: string;
  temperaturaDe: number;
  temperaturaPara: number;

  constructor(public alertController: AlertController) {  }


  async converter(){
    if(this.unidadeDe == null || this.unidadePara == null || this.temperaturaDe == null){
      this.alerta('vc deixou trem em branco aí');
    }

    switch(this.unidadeDe) { 
      case 'c':{
        return this.converterCelcius();
      }

      case 'f':{
        return this.converterFahrenheit();
      }

      case 'k':{
        return this.converterKelvin();
      }
    }
  }
  
  async converterCelcius(){
    if(this.unidadePara === 'f'){
      this.temperaturaPara = (this.temperaturaDe / 5 * 9 + 32);
      return;
    }
    if(this.unidadePara === 'k'){
      this.temperaturaPara = (this.temperaturaDe + 273.15);
      return;
    } 
    
    return this.alerta('vc escolheu a mesma unidade pros dois, fi');
  }

  async converterFahrenheit(){
    const celcius = (5 * (this.temperaturaDe - 32) / 9);
    if(this.unidadePara === 'c'){
      this.temperaturaPara = celcius;
      return;      
    }
    if(this.unidadePara === 'k'){
      this.temperaturaPara = (celcius + 273.15); 
      return;
    } 

    return this.alerta('vc escolheu a mesma unidade pros dois, fi');
  }

  async converterKelvin(){
    const celcius = this.temperaturaDe - 273.15;
    if(this.unidadePara === 'c'){
      this.temperaturaPara = celcius;
      return;
    }
    if(this.unidadePara === 'f'){
      this.temperaturaPara = (celcius / 5 * 9 + 32); 
      return;
    }
    
    return this.alerta('vc escolheu a mesma unidade pros dois, fi');
  }

  async alerta(mensagem: string){
    const alert = await this.alertController.create({ 
      header: 'ô marmota',
      message: mensagem,
      buttons: ['panguei']
    });

    await alert.present();
  }

  async limpar(){
    this.unidadePara = null;
    this.unidadeDe = null;
    this.temperaturaPara = null;
    this.temperaturaDe = null;
  }

  ngOnInit(){}
}
