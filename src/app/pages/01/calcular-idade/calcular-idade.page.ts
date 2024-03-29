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
  private diaDaSemana: string;

  constructor() {
  }

  getDate(): string | Date {
      const date = new Date();
      let max = date.toLocaleString('default', {year: 'numeric', month: 'numeric', day: 'numeric'});
      const fracao = max.split('/');
      max = fracao[2] + '-' + fracao[1] + '-' + fracao[0];
      return max;
  }

  async calcular(): Promise<void> {
    const nasc = new Date(this.nascimento);
      if (!isNaN(Number(nasc))) {
          this.calcularIdade(nasc);
          this.calcularAniversario(nasc);
          return;          
      }
      alert('Por favor, insira uma data.');
      return;
  }

  async calcularAniversario(nasc: Date){
    const dataAtual = new Date();
    const anoNasc = nasc.getFullYear();
    const anoAtual = dataAtual.getFullYear();
    const bissexto = this.calcularBissexto(anoNasc);
    this.proximoAniversario = this.calcularDias(anoNasc, bissexto);
    this.diaDaSemana = this.calcularDiaSemana(nasc);

  }

  calcularDiaSemana(nasc: Date){
    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
    const diaNasc = nasc.getDate();
    const mesNasc = nasc.getMonth();
    let dia: number;

    if (mesNasc === mesAtual && diaNasc <= diaAtual) {
      dia = new Date(anoAtual + 1, mesAtual, diaNasc).getDay();
      return this.diaSemana(dia);
    } 

    if (mesNasc === mesAtual && diaNasc > diaAtual) {
      dia = new Date(anoAtual, mesNasc, diaNasc).getDay();
      return this.diaSemana(dia);
    }
    
    if (mesNasc < mesAtual) {
      dia = new Date(anoAtual + 1, mesNasc, diaNasc).getDay();
      return this.diaSemana(dia);
    } 
    
    dia = new Date(anoAtual, mesNasc, diaNasc).getDay();
    return this.diaSemana(dia);
  }

  calcularBissexto(anoNasc: number){
    const anoAtual = new Date().getFullYear();
    const j = anoAtual - anoNasc;
    let bissexto = 0;

    for (let i = 0; i < j; i++) {
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

  async calcularIdade(nasc: Date){
    const dataAtual = new Date();
    this.idadeDias = parseInt(String((Number(dataAtual) - Number(nasc)) / (24 * 3600 * 1000)));
    this.idadeHoras = this.idadeDias * 24;
    this.idadeMinutos = this.idadeHoras * 60;
    return;
  }

  diaSemana(day: number): string {
    switch (day) {
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
    }
  }

  ngOnInit() {
  }

}
