import { Tipo } from "./tipo";
import { User } from "./user";

export class Conta {
    id: string;
    user: User;
    tipo: Tipo;
    valor: string;
    situacao: string;
    cor: string;
    icon: string;
    descricao: string;
    vencimento: string;
  }