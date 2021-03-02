import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'verificar-numero',
    loadChildren: () => import('./pages/01/verificar-numero/verificar-numero.module').then( m => m.VerificarNumeroPageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./pages/01/conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/01/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'calcular-idade',
    loadChildren: () => import('./pages/01/calcular-idade/calcular-idade.module').then( m => m.CalcularIdadePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/02/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pages/02/pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },
  {
    path: 'pessoa-add',
    loadChildren: () => import('./pages/02/pessoa-add/pessoa-add.module').then( m => m.PessoaAddPageModule)
  },
  {
    path: 'pessoa-add/:id',
    loadChildren: () => import('./pages/02/pessoa-add/pessoa-add.module').then( m => m.PessoaAddPageModule)
  },
  {
    path: 'gerenciador-contas',
    loadChildren: () => import('./pages/02/gerenciador-contas/gerenciador-contas.module').then( m => m.GerenciadorContasPageModule)
  },
  {
    path: 'contas',
    loadChildren: () => import('./pages/02/contas/contas.module').then( m => m.ContasPageModule)
  },
  {
    path: 'conta-add',
    loadChildren: () => import('./pages/02/conta-add/conta-add.module').then( m => m.ContaAddPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./pages/02/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'tipos-add',
    loadChildren: () => import('./pages/02/tipos-add/tipos-add.module').then( m => m.TiposAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
