import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  { path: 'users', pathMatch: 'full', redirectTo: 'users' },
  { path: '**', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
