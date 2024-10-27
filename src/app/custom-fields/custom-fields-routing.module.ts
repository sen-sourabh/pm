import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomFieldComponent } from './add-custom-field/add-custom-field.component';
import { AllCustomFieldsComponent } from './all-custom-fields/all-custom-fields.component';

const routes: Routes = [
  {
    path: '',
    component: AllCustomFieldsComponent,
  },
  {
    path: 'add-custom-field',
    component: AddCustomFieldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFieldsRoutingModule {}
