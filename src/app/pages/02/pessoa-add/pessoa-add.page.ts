import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-pessoa-add',
  templateUrl: './pessoa-add.page.html',
  styleUrls: ['./pessoa-add.page.scss'],
})
export class PessoaAddPage implements OnInit {
  id: string;
  pessoas: any []; 
  pessoa = { //declara o objeto pessoa
    id: null,
    nome: null,
    dtNasc: null,
    cpf: null,
    telefone: null,
    cep: null,
    rua: null,
    num: null,
    bairro: null,
    cidade: null,
    estado: null
  };

  endereco: any = {
    logradouro: null,
    bairro: null,
    localidade: null,
    uf: null
  };

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, private cepService: CepService) { }

  async preencherEndereco(){
    this.cepService.obterEndereco(this.pessoa.cep)
    .then((json)=>{
      this.endereco = json;
      this.pessoa.rua = this.endereco.logradouro;
      this.pessoa.bairro = this.endereco.bairro;
      this.pessoa.cidade = this.endereco.localidade;
      this.pessoa.estado = this.endereco.uf;
    })
    .catch((erro)=>{
      //vai ter um toggle
    });
  }



  async submitForm() {
    this.pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    
    if(this.id){
      this.pessoas[this.id] = this.pessoa;
    } else {
      this.pessoas.push(this.pessoa);
    }

    localStorage.setItem('pessoaDB', JSON.stringify(this.pessoas));
    this.navController.navigateBack('/gerenciador-contas');
  }

  ngOnInit() {
    this.pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(!this.pessoas){
      this.pessoas = [];
      localStorage.setItem('pessoaDB', JSON.stringify(this.pessoas));
    }

    this.activatedRoute.params.subscribe((pessoa: any) => { //vê se tem um id no get
      if(pessoa.id){
        this.pessoa = this.pessoas[this.id];
      } else {
        this.pessoa.id = this.pessoas.length;
      }
    }); 
    
  }
}
