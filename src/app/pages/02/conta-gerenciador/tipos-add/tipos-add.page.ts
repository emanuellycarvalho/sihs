import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../../../../models/tipo';

@Component({
  selector: 'app-tipos-add',
  templateUrl: './tipos-add.page.html',
  styleUrls: ['./tipos-add.page.scss'],
})
export class TiposAddPage implements OnInit {
  id: number;
  tipos: Tipo[]; 
  tipo: Tipo;
  constructor(private navController: NavController, private activatedRoute: ActivatedRoute) { }

  async ionViewWillEnter() {
    this.auth();
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
    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if(!this.tipos){
      this.tipos = [];
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    } 
    
    this.activatedRoute.params.subscribe((tipo: any) => { //vê se tem um id no get
      if(tipo.id){
        this.tipo = this.tipos[this.id];
      } else {
        this.tipo.id = this.tipos.length;
      }
    }); 
  }

}
