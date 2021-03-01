import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
