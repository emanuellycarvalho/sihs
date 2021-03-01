import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gerenciador-contas',
  templateUrl: './gerenciador-contas.page.html',
  styleUrls: ['./gerenciador-contas.page.scss'],
})
export class GerenciadorContasPage implements OnInit {
  id: string;
  pessoas: any [];
  cpf: string;
  telefone: string;
  pessoa = { 
    id: null,
    nome: null,
    dtNasc: null,
    cpf: null,
    telefone: null,
    cep: null,
    rua: null,
    num: null,
    bairro: null,
    cidade: null,
    estado: null
  };

  constructor(private navController: NavController) { }

  async authLogin(){
    for(let i = 0; i < this.pessoas.length; i ++){
      let pessoa = this.pessoas[i];
      if(pessoa.cpf === this.cpf && pessoa.telefone === this.telefone){
        localStorage.setItem('auth', pessoa.id);
      }
    }
  }

  ngOnInit(){
    //pega o array de pessoas, se existente
    this.pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem('pessoaDB', JSON.stringify(this.pessoas));
    }

    //vê se tem alguém logado
    this.id = JSON.parse(localStorage.getItem('auth'));
    for(let i = 0; i < this.pessoas.length; i ++){
      let pessoa = this.pessoas[i];
      if(this.id === pessoa.id){
        this.navController.navigateBack('/contas'); //se tem, redireciona
      }
    }

    localStorage.setItem('auth', null);
  }

}
