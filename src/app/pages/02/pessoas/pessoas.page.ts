import { Component, DebugNode, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa} from 'src/app/models/pessoa';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {
  pessoas: any[] = [];

  constructor(private navController: NavController, public alertController: AlertController, public toastController: ToastController, private pessoaService: PessoaService) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

  carregarLista(){
    this.pessoaService.listar()
    .then((json)=>{
      this.pessoas = <Pessoa[]>json;
    })
    .catch((erro)=>{
      console.log("erro");
    }); 
  }

  async excluirPessoa(id: number){
    let pessoa: Pessoa;
    pessoa = this.pessoas.find(p => p.id == id);
    this.confirmarExclusao(pessoa);   
  }

  async confirmarExclusao(pessoa: Pessoa){
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: pessoa.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
           
            this.pessoaService.excluir(pessoa.id)
            .then((json) => {
              this.carregarLista();
              this.exibirMensagem();
            })
            .catch((erro) => {
              console.log(erro);
            });   
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem() {
    const toast = await this.toastController.create({
      message: 'Registro excluído com sucesso!!!',
      duration: 1500
    });
    toast.present();
  }

}
