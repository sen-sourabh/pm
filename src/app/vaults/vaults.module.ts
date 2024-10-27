import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddVaultComponent } from './add-vault/add-vault.component';
import { AllVaultsComponent } from './all-vaults/all-vaults.component';
import { VaultsRoutingModule } from './vaults-routing.module';

@NgModule({
  declarations: [AllVaultsComponent, AddVaultComponent],
  imports: [CommonModule, VaultsRoutingModule],
})
export class VaultsModule {}
