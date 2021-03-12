import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {CepService} from 'src/app/services/cep.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa} from 'src/app/models/pessoa';
import { Endereco} from 'src/app/interfaces/endereco';


@Component({
  selector: 'app-pessoa-add',
  templateUrl: './pessoa-add.page.html',
  styleUrls: ['./pessoa-add.page.scss'],
})
export class PessoaAddPage implements OnInit {
  pessoa: Pessoa;
  endereco: Endereco;

  public formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private cepService: CepService, public toastController: ToastController, private formBuilder: FormBuilder, private pessoaService: PessoaService){ 
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'dataNascimento':['', Validators.compose([
        Validators.required
      ])],
      'telefone':['', Validators.compose([
        Validators.required
      ])],
      'cep':['', Validators.compose([
        Validators.required
      ])],
      'cpf':['', Validators.compose([
        Validators.required
      ])],
      'rua':['', Validators.compose([
        Validators.required
      ])],
      'bairro':['', Validators.compose([
        Validators.required
      ])],
      'cidade':['', Validators.compose([
        Validators.required
      ])],
      'estado':['', Validators.compose([
        Validators.required
      ])]
    })
  }

  async preencherEndereco(){
    this.cepService.obterEndereco(this.formGroup.value.cep)
    .then((json)=>{
      this.endereco = <Endereco>json;
      this.formGroup.get('rua').setValue(this.endereco.logradouro);
      this.formGroup.get('bairro').setValue(this.endereco.bairro);
      this.formGroup.get('cidade').setValue(this.endereco.localidade);
      this.formGroup.get('estado').setValue(this.endereco.uf);
    })
    .catch((erro)=>{
      this.exibirMensagem('Erro ao consultado o CEP');
    });
    
  }

  ngOnInit() {

    this.pessoa = new Pessoa();
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    if(id != null){
      this.pessoaService.buscar(parseInt(id))
      .then((json) => {
        this.pessoa = <Pessoa>json;

        this.formGroup.get('nome').setValue(this.pessoa.nome);
        this.formGroup.get('dataNascimento').setValue(this.pessoa.dataNascimento);
        this.formGroup.get('cpf').setValue(this.pessoa.cpf);
        this.formGroup.get('telefone').setValue(this.pessoa.telefone);
        this.formGroup.get('cep').setValue(this.pessoa.cep);
        this.formGroup.get('rua').setValue(this.pessoa.rua);
        this.formGroup.get('bairro').setValue(this.pessoa.bairro);
        this.formGroup.get('cidade').setValue(this.pessoa.cidade);
        this.formGroup.get('estado').setValue(this.pessoa.uf);   

      })        
      .catch((erro) => {
        console.log(erro);
      });

    }

  }

  async submitForm(){

    this.pessoa.nome = this.formGroup.value.nome; 
    this.pessoa.dataNascimento = new Date(this.formGroup.value.dataNascimento);
    this.pessoa.cpf = this.formGroup.value.cpf;
    this.pessoa.telefone = this.formGroup.value.telefone;
    this.pessoa.cep = this.formGroup.value.cep;
    this.pessoa.rua = this.formGroup.value.rua;
    this.pessoa.bairro = this.formGroup.value.bairro;
    this.pessoa.cidade = this.formGroup.value.cidade;
    this.pessoa.uf = this.formGroup.value.estado;

    this.pessoaService.salvar(this.pessoa)
    .then((json) => {
      this.exibirMensagem('Registro salvo com sucesso!!!');
      this.navController.navigateBack('/pessoa');
    })
    .catch((erro) => {
      console.log(erro);
    });
     
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }
}
