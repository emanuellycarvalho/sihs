import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tipo } from '../../../../models/tipo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {
  tipos: Tipo[];
  user: string;

  constructor(
    private navController: NavController,
    public toastController: ToastController) { }


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
  
  async auth(){ //confere se tá logado
    const users = JSON.parse(localStorage.getItem('userDB'));
    if(users != null){
      const id = JSON.parse(localStorage.getItem('auth'));
      if(id != null){
        for(let i = 0; i < users.length; i++){
          if(id == users[i].id){
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

  async logout(){
    localStorage.setItem('auth', null);
    this.navController.navigateBack('/gerenciador-contas'); 
  }
  
  ngOnInit() {
    this.auth(); 
    
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(!this.tipos){
      this.criarTiposPadrao();
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    }
  } 

}
