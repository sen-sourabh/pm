import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ComponentsComponent } from './components/components.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [UserComponent, ComponentsComponent, ListUsersComponent, AddUserComponent],
  imports: [CommonModule],
})
export class UserModule {}
