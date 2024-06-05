import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ApiComponent } from './components/api/api.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path: 'list-products', component: ListProductsComponent},
  { path: 'users', component: UserListComponent },
  { path: 'api', component: ApiComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: '', redirectTo: '/list-products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };