import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'C:/Projects Ionic/sihs/src/app/models/user'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  id: string;
  user: User;
  users: User[];

  public cadastro: FormGroup;

  constructor(
    private navController: NavController, 
    public toastController: ToastController,
    public activatedRoute: ActivatedRoute){ 

    this.cadastro = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {

    this.users = JSON.parse(localStorage.getItem('userDB'));
    if(this.users == null){
      this.users = [];
      this.id = '0';
      this.user.id = this.id;
      return;
    }

    this.activatedRoute.params.subscribe((user: any) => { //vê se tem um id no get
      if(user.id){
        this.user = this.users[user.id];
        this.id = user.id;

        this.cadastro.value.nome = user.nome;
        this.cadastro.value.senha = user.senha;
        this.cadastro.value.username = user.username;
      } else {
        this.user = new User();
        this.user.id = this.users.length.toString();
      }
    }); 

  }
  
  verificarUsuario(){    
    if(this.cadastro.value.username == null){
      return false;
    }

    this.users = JSON.parse(localStorage.getItem('userDB'));
    if(this.users == null){
      return false;
    }

    for(var i = 0; i< this.users.length; i++){
      if(this.users[i] != null){
        let usern = this.users[i].username;
        if(this.cadastro.value.username === usern){
          return true;
        }
      }
    }

    return false;
  }

  async enviar(){

    this.user.nome = this.cadastro.value.nome;
    this.user.senha = this.cadastro.value.senha;
    this.user.username = this.cadastro.value.username;

    this.users = JSON.parse(localStorage.getItem('userDB'));
    
    if(this.id){
      this.users[this.id] = this.user;
    } else {
      this.users.push(this.user);
    }

    localStorage.setItem('userDB', JSON.stringify(this.users));
    localStorage.setItem('auth', this.user.id.toString());
    this.navController.navigateBack('/conta-add');     
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
