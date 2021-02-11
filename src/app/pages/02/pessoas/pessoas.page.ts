import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {
  pessoas: any[] = [];

  constructor() { }

  async ionViewWillEnter() {
    this.pessoas = JSON.parse(localStorage.getItem('pessoaDB'));
    if(!this.pessoas){
      this.pessoas = []
      localStorage.setItem('pessoaDB', JSON.stringify(this.pessoas));
    } 
  }

  ngOnInit() {
  }

}
