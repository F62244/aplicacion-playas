import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UserListComponent } from './user-list/user-list.component';
import { ApiComponent } from './api/api.component';
import { ServicesInterfaces } from './services-interfaces/interfaces.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    UserListComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { };