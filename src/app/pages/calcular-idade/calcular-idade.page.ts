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
    max = max.split('/')[2] + '-' + max.split('/')[1] + '-' + max.split('/')[0];
    return max;
  }

  async calcular(): Promise<void> {
    if (!isNaN(Number(new Date(this.nascimento)))) {
      const currentDate = new Date();
      this.idadeDias = parseInt(String((Number(currentDate) - Number(new Date(this.nascimento))) / (24 * 3600 * 1000)));
      this.idadeHoras = this.idadeDias * 24;
      this.idadeMinutos = this.idadeHoras * 60;
      const anoNasc = new Date(this.nascimento).getFullYear();
      const anoAtual = (currentDate.getFullYear());
      let bissexto = 0;
      for (let i = 0; i < anoAtual - anoNasc; i++) {
        if ((anoNasc + i) % 4 === 0) {
          bissexto += 1;
        }
      }
      if ((365 - (this.idadeDias % 365)) === 0) {
        this.proximoAniversario = 0;
      } else if (anoNasc % 4 === 0) {
        this.proximoAniversario = 365 - (this.idadeDias % 365) + bissexto - 1;
      } else if (bissexto > 0) {
        this.proximoAniversario = 365 - (this.idadeDias % 365) + bissexto;
      } else {
        this.proximoAniversario = 365 - (this.idadeDias % 365);
      }
      if (new Date(this.nascimento).getMonth() > currentDate.getMonth()) {
        this.diaSemana = this.diaDaSemana(new Date(currentDate.getFullYear(), new Date(this.nascimento).getMonth(), new Date(this.nascimento).getDate()).getDay());
        console.log('aqui');
      } else if (new Date(this.nascimento).getMonth() === currentDate.getMonth() &&
          new Date(this.nascimento).getDate() <= currentDate.getDate()) {
        this.diaSemana = this.diaDaSemana(new Date(currentDate.getFullYear() + 1,
            currentDate.getMonth(), new Date(this.nascimento).getDate()).getDay());
        console.log('menor =');
        console.log(new Date(currentDate.getFullYear() + 1,
            currentDate.getMonth(), new Date(this.nascimento).getDate()));

      } else if (new Date(this.nascimento).getMonth() === currentDate.getMonth() &&
          new Date(this.nascimento).getDate() > currentDate.getDate()) {
        this.diaSemana = this.diaDaSemana(new Date(currentDate.getFullYear(),
            new Date(this.nascimento).getMonth(), new Date(this.nascimento).getDate()).getDay());
        console.log(new Date(currentDate.getFullYear(),
            new Date(this.nascimento).getMonth(), new Date(this.nascimento).getDate()));

      }

      console.log('Anos bissexto: ', bissexto);
      console.log(365 - (this.idadeDias % 365));
    } else {
      alert('Insira uma data!');
    }
  }

  diaDaSemana(day: number){
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
      default:
        return 'Indefinido';
    }
  }

  ngOnInit() {
  }

}
