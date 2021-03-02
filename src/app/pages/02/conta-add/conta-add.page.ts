import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conta-add',
  templateUrl: './conta-add.page.html',
  styleUrls: ['./conta-add.page.scss'],
})
export class ContaAddPage implements OnInit {
  tipos: any[] = [];
  contas: any[] = [];
  id: number;
  conta:{
    id: null,
    user: null,
    tipo: null,
    valor: null,
    situacao: null,
    descricao: null,
    vencimento: null
  }

  constructor(private navController: NavController) { }

  async ionViewWillEnter() {
    this.auth();
  }

  async registrarConta(){
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
    for(let i = 0; i < this.tipos.length; i++){
      if(this.conta.tipo === this.tipos[i].id){
        this.conta.tipo = this.tipos[i];
      }
    }
    
    if(this.id){
      this.contas[this.id] = this.conta;
    } else {
      this.contas.push(this.conta);
    }

    localStorage.setItem('contaDB', JSON.stringify(this.contas));
    this.navController.navigateBack('/contas');
  }
  
  async auth(){ //confere se tá logado
    let pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(pessoas != null){
      let id = JSON.parse(localStorage.getItem('auth'));
      if(id != null){
        for(let i = 0; i < pessoas.length; i ++){
          let pessoa = pessoas[i];
          if(id === pessoa.id){
            this.conta.user = id;
            return; 
          }
        }
      }
    }

    localStorage.setItem('auth', null);

    this.navController.navigateBack('/gerenciador-contas'); 
  }

  ngOnInit() {
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(!this.tipos){
      this.tipos = []
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } 
  }
 
}
