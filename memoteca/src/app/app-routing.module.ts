import { CriarPensamentosComponent } from './componentes/Pensamentos/criar-pensamentos/criar-pensamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componentes/Pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
