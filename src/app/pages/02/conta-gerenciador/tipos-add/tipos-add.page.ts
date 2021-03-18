import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from '../../../../models/tipo';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipos-add',
  templateUrl: './tipos-add.page.html',
  styleUrls: ['./tipos-add.page.scss'],
})
export class TiposAddPage implements OnInit {
  id: string;
  tipos: Tipo[];
  tipo: Tipo = new Tipo();

  public cadastro: FormGroup;

  constructor(
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController) {

    this.cadastro = new FormGroup({
      nome: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
    this.auth();

    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));
    if (!this.tipos) {
      this.criarTiposPadrao();
      localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    }

    this.activatedRoute.params.subscribe((tipo: any) => { //vê se tem um id no get
      if (tipo.id) {
        this.tipo = this.tipos[this.id];
      } else {
        this.tipo.id = this.tipos.length.toString();
      }
    });
  }
  async cadastrarTipo() {
    this.tipo.nome = this.cadastro.value.nome;

    this.tipos = JSON.parse(localStorage.getItem('tipoDB'));

    if (this.id) {
      this.tipos[this.id] = this.tipo;
    } else {
      this.tipo.id = this.tipos.length.toString();
      this.tipos.push(this.tipo);
    }

    localStorage.setItem('tipoDB', JSON.stringify(this.tipos));
    this.navController.navigateBack('/tipos');
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

  async auth() { //confere se tá logado
    const users = JSON.parse(localStorage.getItem('userDB'));
    if (users != null) {
      const id = JSON.parse(localStorage.getItem('auth'));
      if (id != null) {
        for (let i = 0; i < users.length; i++) {
          if (id == users[i].id) {
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

}
