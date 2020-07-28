import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SortPipe } from './sort.pipe';
import { SearchUserPipe } from './search-user.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    SearchUserPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SortPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
