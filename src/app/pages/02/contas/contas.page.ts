import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {
  contas: any [] = []; 
  user: number; 

  constructor(private navController: NavController) { }

  async ionViewWillEnter() {
    this.auth();
    
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
    if(!this.contas){
      this.contas = []
      localStorage.setItem('contaDB', JSON.stringify(this.contas));
    }  
    
    console.log(this.contas);
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
