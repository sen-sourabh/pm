import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVaultComponent } from './add-vault/add-vault.component';
import { AllVaultsComponent } from './all-vaults/all-vaults.component';

const routes: Routes = [
  {
    path: '',
    component: AllVaultsComponent,
  },
  {
    path: 'add-vault',
    component: AddVaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaultsRoutingModule {}
