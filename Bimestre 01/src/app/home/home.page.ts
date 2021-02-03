import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    //primeiro bimestre
    {title: 'Calculadora de Idade', url: '../calcular-idade', icon:'calendar', color: 'tertiary'},
    {title: 'Calculadora', url: '../calculadora', icon:'calculator', color: 'tertiary'},
    {title: 'Conversor', url: '../conversor', icon:'thermometer', color: 'tertiary'},
    {title: 'Verificar número', url: '../verificar-numero', icon:'trail-sign', color: 'tertiary'},

    //mais
    {title: 'Sobre', url: '../sobre', icon:'information-circle', color: ''},
  ];

  constructor() { }


}
