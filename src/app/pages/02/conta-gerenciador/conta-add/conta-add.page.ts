import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Conta } from '../../../../models/conta';
import { Tipo } from '../../../../models/tipo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-conta-add',
  templateUrl: './conta-add.page.html',
  styleUrls: ['./conta-add.page.scss'],
})
export class ContaAddPage implements OnInit {
  tipo: string;
  tipos: Tipo[];
  conta: Conta;
  contas: Conta[];
  id: string;

  constructor(
    private navController: NavController, 
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,) { }

  async ionViewWillEnter() {
    this.auth();
  }

  async registrarConta(){
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
    if(this.contas == null){
      this.contas = [];
    }
  
    if(!this.formatarObjConta()){
      this.exibirMensagem("Desculpe, ocorreu um erro ao registrar a conta.");
      return;
    }

    if(this.id){
      this.contas[this.id] = this.conta;
    } else {
      this.contas.push(this.conta);
    }

    localStorage.setItem('contaDB', JSON.stringify(this.contas));
    this.navController.navigateBack('/contas');
  }

  criarTiposPadrao(){
    const tipo1 = new Tipo();
    tipo1.id = "0";
    tipo1.nome = "Luz";

    const tipo2 = new Tipo();
    tipo2.id = "1";
    tipo2.nome = "Água";

    this.tipos = [tipo1, tipo2];

    return;
  }
 
  formatarObjConta(){
    if(this.conta == null){
      return false;
    }

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

    for(let i = 0; i < this.tipos.length; i++){
      if(this.tipos[i] != null && this.tipo === this.tipos[i].id)
      this.conta.tipo = this.tipos[i];
      return true;
    }
    
    this.exibirMensagem("Desculpe, ocorreu um erro ao recuperar o tipo selecionado.");
    return false;
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
    this.exibirMensagem("Por favor, realize o login para continuar.");
    this.navController.navigateBack('/gerenciador-contas'); 
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

  ngOnInit() {
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(this.tipos == null){
      this.criarTiposPadrao();
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } 

    this.activatedRoute.params.subscribe((conta: any) => { //vê se tem um id no get
      if(conta.id){
        this.conta = this.contas[this.id];
      } else {
        this.conta.id = this.contas.length.toString();
      }
    });
  }

}
