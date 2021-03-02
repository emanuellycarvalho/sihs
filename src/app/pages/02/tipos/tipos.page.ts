import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {
  tipos: any [] = [];
  user: number;

  constructor(private navController: NavController) { }

  async ionViewWillEnter() {
    this.auth(); 
    
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(!this.tipos){
      this.tipos = []
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } 
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
