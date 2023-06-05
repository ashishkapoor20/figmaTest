import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: 'userTable',
    component: UserTableComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
