import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tipos-add',
  templateUrl: './tipos-add.page.html',
  styleUrls: ['./tipos-add.page.scss'],
})
export class TiposAddPage implements OnInit {
  id: number;
  tipos: any []; 
  tipo = { 
    id: null,
    nome: null
  };

  constructor(private navController: NavController) { }

  async ionViewWillEnter() {
    this.auth();

    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    
    if(this.tipos === null){
      this.tipos = [];
      this.id = 0;
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } else {
      this.id = this.tipos.length;
    }
  }

  async cadastrarTipo() {
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));

    if(this.id){
      this.tipos[this.id] = this.tipo;
    } else {
      this.tipos.push(this.tipo);
    }

    localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    this.navController.navigateBack('/tipos');
  }

  async auth(){ //confere se tá logado
    let pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(pessoas != null){
      let id = JSON.parse(localStorage.getItem('auth'));
      if(id != null){
        for(let i = 0; i < pessoas.length; i ++){
          let pessoa = pessoas[i];
          if(id === pessoa.id){
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
