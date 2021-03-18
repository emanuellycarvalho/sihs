import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {
  urlServidor: string = "http://localhost:8080/public/pessoas/";
  contas: any [] = []; 
  user: number; 

  constructor(private navController: NavController, private location: Location, public alertController: AlertController,
              private httpClient: HttpClient, public toastController: ToastController) { }

  async ionViewWillEnter() {
    this.auth();
    this.carregarLista();  
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
  
  async excluirConta(id: number){
    let conta;
    conta = this.contas.find(c => c.id === id);
    this.confirmarExclusao(conta);
  }

  async confirmarExclusao(conta: any){
    let msg = conta.tipo.nome + " (" + conta.situacao + ")";
    if(conta.descricao != null){
      msg += ": <br> " + conta.descricao;
    }
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: msg,
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'primary',
        }, {
          text: 'Confirmar',
          cssClass: 'success',
          handler: () => {
            this.contas = JSON.parse(localStorage.getItem('contaDB'));
            this.contas[conta.id] = null;
            localStorage.setItem('contaDB', JSON.stringify(this.contas));
            this.navController.navigateBack('contas'); 
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }
  
  async carregarLista(){
    this.contas = JSON.parse(localStorage.getItem('contaDB'));
    if(!this.contas){
      this.contas = []
      localStorage.setItem('contaDB', JSON.stringify(this.contas));
    }
  }

  async auth(){ //confere se tá logado
    let users = JSON.parse(localStorage.getItem('userDB'));
    if(users != null){
      let id = JSON.parse(localStorage.getItem('auth'));

      if(id != null){
        for(let i = 0; i < users.length; i++){

          if(id == users[i].id){
              this.conta.user = users[i];
            return; 
          } 
        }
      }
    }

    localStorage.setItem('auth', null);
    this.exibirMensagem("Por favor, realize o login para continuar.");
    this.navController.navigateBack('/gerenciador-contas'); 
  }


  async logout(){
    localStorage.setItem('auth', null);
    this.navController.navigateBack('/gerenciador-contas'); 
  }

  ngOnInit() {
  }

}
