import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';


import { UsersComponent } from './users.component';

const routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
