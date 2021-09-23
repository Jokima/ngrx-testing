import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'todos', loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
