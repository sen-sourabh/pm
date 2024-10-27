import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFieldsRoutingModule } from './custom-fields-routing.module';
import { AllCustomFieldsComponent } from './all-custom-fields/all-custom-fields.component';
import { AddCustomFieldComponent } from './add-custom-field/add-custom-field.component';

@NgModule({
  declarations: [AllCustomFieldsComponent, AddCustomFieldComponent],
  imports: [CommonModule, CustomFieldsRoutingModule],
})
export class CustomFieldsModule {}
