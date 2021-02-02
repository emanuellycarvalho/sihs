import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-idade',
  templateUrl: './calcular-idade.page.html',
  styleUrls: ['./calcular-idade.page.scss'],
})

export class CalcularIdadePage implements OnInit {

  private nascimento: Date;
  private idadeDias: number;
  private idadeHoras: number;
  private idadeMinutos: number;
  private proximoAniversario: number;
  private diaSemana: string;

  constructor() {
  }

  getDate(): string | Date {
    const data = new Date();
    let max = data.toLocaleString('default', {year: 'numeric', month: 'numeric', day: 'numeric'});
    const fracao = max.split('/');
    max = fracao[2] + '-' + fracao[1] + '-' + fracao[0];
    return max;
  }

  async calcular(){
    const nasc = new Date(this.nascimento);
    if(nasc != null){
      this.calcularIdade(nasc);
      this.calcularAniversario(nasc);
      return;
    }
    alert('Por favor, insira uma data.');
    return;
  }

  async calcularAniversario(nasc: Date){
    const currentDate = new Date();
    const anoNasc = nasc.getFullYear();
    const anoAtual = currentDate.getFullYear();
    const bissexto = this.calcularBissexto(anoAtual, anoNasc);
    this.proximoAniversario = this.calcularDias(anoNasc, bissexto);
    this.diaSemana = this.calcularDiaDaSemana(nasc);
    return;    
  }

  async calcularIdade(nasc: Date){
    const currentDate = new Date();
    this.idadeDias = Number(currentDate) - Number(nasc) / (24 * 3600 * 1000);
    this.idadeHoras = this.idadeDias * 24;
    this.idadeMinutos = this.idadeHoras * 60;
    return;
  }

  calcularBissexto(anoAtual, anoNasc){
    let bissexto = 0;
    for (let i = 0; i < anoAtual - anoNasc; i++) {
      if ((anoNasc + i) % 4 === 0) {
        bissexto += 1;
      }
    }
    return bissexto;
  }

  calcularDias(anoNasc: number, bissexto: number){
    const diasFaltantes = 365 - (this.idadeDias % 365);
    if (diasFaltantes === 0) { 
      return 0;
    }

    if (anoNasc % 4 === 0) {
      return diasFaltantes + bissexto - 1;
    }
    
    if (bissexto > 0) {
      return diasFaltantes + bissexto;
    } 

    return diasFaltantes;
  }

  calcularDiaDaSemana(nasc: Date){
    const currentDate = new Date();
    const anoAtual = currentDate.getFullYear();
    const mesNasc = new Date(this.nascimento).getMonth();
    const mesAtual = currentDate.getMonth(); 
    const dataNasc =  nasc.getDate();
    const dataAtual = currentDate.getDate();
    let dia: number;
    
    if (mesNasc > mesAtual) {
      dia = new Date(anoAtual, mesNasc, dataNasc).getDay()
    } 
    
    if (mesNasc === mesAtual && dataNasc <= dataAtual) {
      dia = new Date(anoAtual + 1, mesAtual, dataNasc).getDay();
    }
    
    if (mesNasc === mesAtual && dataNasc > dataAtual) {
      dia = new Date(anoAtual, mesNasc, dataNasc).getDay();
    }

    return this.diaDaSemana(dia);
  }

  diaDaSemana(dia: number){
    switch (dia) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      default:
        return 'Indefinido';
    }
  }

  ngOnInit() {
  }

}
