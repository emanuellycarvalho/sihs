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
      email: new FormControl('', [Validators.required, Validators.email]),
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
        this.cadastro.value.email = user.email;
      } else {
        this.user = new User();
        this.user.id = this.users.length.toString();
      }
    }); 

  }
  
  verificarEmailValido(){
    const email = this.cadastro.get('email');
    if(email.touched && email.invalid){
      return true;
    }
    
    if(email.touched && email.errors != null){
      return true;
    }

    return false;
  }

  verificarEmailExistente(){    
    if(this.cadastro.value.email == null){
      return false;
    }

    this.users = JSON.parse(localStorage.getItem('userDB'));
    if(this.users == null){
      return false;
    }

    for(var i = 0; i< this.users.length; i++){
      if(this.users[i] != null){
        let email = this.users[i].email;
        if(this.cadastro.value.email === email){
          return true;
        }
      }
    }

    return false;
  }

  async enviar(){

    this.user.nome = this.cadastro.value.nome;
    this.user.senha = this.cadastro.value.senha;
    this.user.email = this.cadastro.value.email;

    this.users = JSON.parse(localStorage.getItem('userDB'));
    
    if(this.id){
      this.users[this.id] = this.user;
    } else {
      this.users.push(this.user);
    }

    localStorage.setItem('userDB', JSON.stringify(this.users));
    localStorage.setItem('auth', this.user.id.toString());
    this.exibirMensagem('Cadastro realizado com sucesso! Registre sua primeira conta a seguir.');
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
