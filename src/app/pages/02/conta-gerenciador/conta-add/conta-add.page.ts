import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  conta = {
    id: null,
    user: null,
    tipo: null,
    valor: null,
    situacao: null,
    cor: null,
    icon: null,
    descricao: null,
    vencimento: null
  }

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute) { }

  async ionViewWillEnter() {
    this.auth();
  }

  async registrarConta(){
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
  
    if(this.conta.valor.indexOf(",") == -1){
      this.conta.valor += ",00";
    }

    if(this.conta.vencimento == null){
      this.conta.vencimento = "Sem data";
    } else {
      let data = this.conta.vencimento.substring(0, 10);
      let array = data.split('-');
      data = array[2] + "/" + array[1] + "/" + array[0];
      this.conta.vencimento = data;
    }

    if(this.conta.situacao == null){
      this.conta.situacao = "Pendente";
      this.conta.icon = "wallet";
      this.conta.cor = "primary";
    } else {
      this.conta.situacao = "Pago";
      this.conta.icon = "checkmark";
      this.conta.cor = "success";
    }

    if(this.id){
      this.contas[this.id] = this.conta;
    } else {
      this.contas.push(this.conta);
    }

    localStorage.setItem('contaDB', JSON.stringify(this.contas));
    this.navController.navigateBack('/contas');
  }

  ngOnInit() {
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(this.tipos == null){
      this.tipos = [];
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } 

    this.activatedRoute.params.subscribe((conta: any) => { //vê se tem um id no get
      if(conta.id){
        this.conta = this.contas[this.id];
      } else {
        this.conta.id = this.contas.length;
      }
    });
  }
 
  async auth(){ //confere se tá logado
    let pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(pessoas != null){
      let id = JSON.parse(localStorage.getItem('auth'));

      if(id != null){
        for(let i = 0; i < pessoas.length; i++){

          if(id === pessoas[i].id){
            this.conta.user = pessoas[i].id;
            return; 
          } 

        }
      }

    }

    localStorage.setItem('auth', null);
    this.navController.navigateBack('/gerenciador-contas'); 
  }

}
