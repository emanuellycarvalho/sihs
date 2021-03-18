import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public primeiroBimestre = [
    {title: 'Calculadora de Idade', url: 'calcular-idade', icon:'calendar'},
    {title: 'Calculadora', url: 'calculadora', icon:'calculator'},
    {title: 'Conversor', url: 'conversor', icon:'thermometer'},
    {title: 'Verificar número', url: 'verificar-numero', icon:'trail-sign'},
  ];

  public segundoBimestre = [
    {title: 'Gerenciador de Contas', url: 'gerenciador-contas', icon:'receipt'},
    {title: 'Gerenciador de Pessoas', url: 'pessoas', icon:'people'},
  ];
  
  public mais = [
    {title: 'Sobre', url: 'sobre', icon:'information-circle'},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /* async auth(){ //confere se tá logado
    const users = JSON.parse(localStorage.getItem('userDB'));
    if(users != null){
      const id = JSON.parse(localStorage.getItem('auth'));
      if(id != null){
        for(let i = 0; i < users.length; i++){
          if(id == users[i].id){
            return; 
          } 
        }
      }
    }

    localStorage.setItem('auth', null);
    this.exibirMensagem("Por favor, realize o login para continuar.");
    this.navController.navigateBack('/gerenciador-contas'); 
  }
  

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }  */

}
