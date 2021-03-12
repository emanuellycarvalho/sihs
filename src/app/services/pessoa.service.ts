import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa} from 'src/app/models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  urlServidor: string = "http://localhost:8080/public/pessoas/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get(this.urlServidor).toPromise();
  }

  buscar(id: number){
    let urlAuxiliar = this.urlServidor + id 
    return this.httpClient.get(urlAuxiliar).toPromise();
  }

  excluir(id: number){
    let urlAuxiliar = this.urlServidor + id 
    return this.httpClient.delete(urlAuxiliar).toPromise();
  }

  salvar(pessoa: Pessoa){
    if(pessoa.id == null){
      return this.httpClient.post(this.urlServidor, JSON.stringify(pessoa), this.httpOptions).toPromise();
    }else{
      return this.httpClient.put(this.urlServidor, JSON.stringify(pessoa), this.httpOptions).toPromise();
    }
  } 

}



