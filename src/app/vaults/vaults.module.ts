import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AddVaultComponent } from './add-vault/add-vault.component';
import { AllVaultsComponent } from './all-vaults/all-vaults.component';
import { VaultsRoutingModule } from './vaults-routing.module';

@NgModule({
  declarations: [AllVaultsComponent, AddVaultComponent],
  imports: [CommonModule, VaultsRoutingModule, CoreModule],
})
export class VaultsModule {}
