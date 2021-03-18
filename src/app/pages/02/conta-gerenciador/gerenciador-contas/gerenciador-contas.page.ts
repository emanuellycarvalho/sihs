import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'C:/Projects Ionic/sihs/src/app/models/user'; 

@Component({
  selector: 'app-gerenciador-contas',
  templateUrl: './gerenciador-contas.page.html',
  styleUrls: ['./gerenciador-contas.page.scss'],
})
export class GerenciadorContasPage implements OnInit {
  id: string;
  user: User;
  users: User[];
  email: string;
  senha: string;

  constructor(private navController: NavController) { }

  async authLogin(){
    for(let i = 0; i < this.users.length; i ++){
      let user = this.users[i];
      if(user.email === this.email && user.senha === this.senha){
        localStorage.setItem('auth', user.id);
        this.navController.navigateBack('/contas'); //se tem, redireciona
      }
    }
  }

  ngOnInit(){
    //pega o array de users, se existente
    this.users = JSON.parse(localStorage.getItem('userDB'));
    if(!this.users){
      this.users = [];
      localStorage.setItem('userDB', JSON.stringify(this.users));
    }

    //vê se tem alguém logado
    this.id = JSON.parse(localStorage.getItem('auth'));
    for(let i = 0; i < this.users.length; i ++){
      let user = this.users[i];
      if(user != null && this.id === user.id){
        this.navController.navigateBack('/contas'); //se tem, redireciona
      }
    }

    localStorage.setItem('auth', null);
  }

}
