import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {
  contas: any [] = []; 
  user: number; 

  constructor(private navController: NavController, private location: Location) { }

  async ionViewWillEnter() {
    this.auth();
    
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
    if(!this.contas){
      this.contas = []
      localStorage.setItem('contaDB', JSON.stringify(this.contas));
    }  
  }

  async excluirConta(id: number){
    for(let i = 0; i < this.contas.length; i ++){
      if(id === this.contas[i].id){
        this.contas.splice(i-1, 1);
        localStorage.setItem('contaDB', JSON.stringify(this.contas));
        location.reload();
      }
    }
  }

  async pagarConta(id: number){
    for(let i = 0; i < this.contas.length; i ++){
      if(id === this.contas[i].id){
        this.contas[i].situacao = "Pago";
        this.contas[i].icon = "checkmark";
        this.contas[i].cor = "success";
        localStorage.setItem('contaDB', JSON.stringify(this.contas));
        location.reload();
      }
    }
  }

  async logout(){
    localStorage.setItem('auth', null);
    this.navController.navigateBack('/gerenciador-contas'); 
  }

  async auth(){ //confere se tá logado
    let pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(pessoas != null){
      let id = JSON.parse(localStorage.getItem('auth'));
      if(id != null){
        for(let i = 0; i < pessoas.length; i ++){
          let pessoa = pessoas[i];
          if(id === pessoa.id){
            this.user = id;
            return; 
          }
        }
      }
    }

    localStorage.setItem('auth', null);
    this.navController.navigateBack('/gerenciador-contas'); 
  }

  ngOnInit() {
  }

}
