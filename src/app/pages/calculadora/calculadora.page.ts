import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  private display: string;
  private operacao: string;
  private numDisplay: number;
  
  constructor() { 
    this.reiniciar();
  }

  async reiniciar(){
    this.display = "0";
    this.operacao = "";
  }

  async registrarNumero(numero: string){
    if((this.display === "0") || this.operacao !== ""){
      this.display = numero;
      return;
    }
    else
      this.display += numero;
  }
  
  async apagar(){
    let index = this.display.length - 1;
    this.display = this.display.substring(0, index);
    return;
  }

  async definirOperacao(operacao: string){
    if(this.operacao !== ""){ //só consigo de novo p operações de um termokk
      let resultado;
      resultado = this.doisTermos();
      this.numDisplay = resultado.__zone_symbol__value;
      this.display = "";

      this.operacao = operacao;
      this.umTermo();

      if(this.numDisplay !== Number(this.display)){ //eh pq era de um termo então tá pronto
        this.operacao = "";
        return;
      }
    }
    else{
      this.numDisplay = Number(this.display);

      this.operacao = operacao;
      this.umTermo();
      
      if(this.numDisplay !== Number(this.display)){ 
        this.operacao = "";
        return;
      }
      
      this.display = "";
      return;
      }
  }

  async calcular(){
    if(this.operacao === "")
      return;
    let resultado;
    resultado = this.doisTermos();
    this.display = resultado.__zone_symbol__value.toString();
    this.operacao = "";
  }

  async umTermo(){
    switch(this.operacao){
      case "exp":{
        this.display = (Math.pow(this.numDisplay, 2)).toString();
        return;
      }
      case "inv":{
        this.display = (1/this.numDisplay).toString();
        return;
      }
      case "menosUm":{
        this.display = (this.numDisplay * (-1)).toString();
        return;
      }
      default:{
        return;
      }
    }
  }

  async doisTermos(){
    let segundo = Number(this.display);
    switch (this.operacao){
      case "%":{
        return (this.numDisplay / 100) * segundo;
      }
      case "/":{
        return this.numDisplay / segundo;
      }
      case "*":{
        return this.numDisplay * segundo;
      }
      case "-":{
        return this.numDisplay - segundo;
      }
      case "+":{
        return this.numDisplay + segundo;
      }
      default:{
        return 0;
      }
    }
  }

  ngOnInit() {
  }

}
