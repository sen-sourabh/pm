import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [AllUsersComponent, AddUserComponent],
  imports: [CommonModule, UsersRoutingModule, CoreModule],
})
export class UsersModule {}
