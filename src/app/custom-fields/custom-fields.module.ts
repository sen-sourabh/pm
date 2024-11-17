import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AddCustomFieldComponent } from './add-custom-field/add-custom-field.component';
import { AllCustomFieldsComponent } from './all-custom-fields/all-custom-fields.component';
import { CustomFieldsRoutingModule } from './custom-fields-routing.module';

@NgModule({
  declarations: [AllCustomFieldsComponent, AddCustomFieldComponent],
  imports: [CommonModule, CustomFieldsRoutingModule, CoreModule],
})
export class CustomFieldsModule {}
