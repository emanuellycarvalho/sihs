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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
