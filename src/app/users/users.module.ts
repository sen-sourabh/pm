import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [AllUsersComponent, AddUserComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
