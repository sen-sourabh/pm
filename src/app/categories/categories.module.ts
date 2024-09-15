import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [AllCategoriesComponent, AddCategoryComponent],
  imports: [CoreModule, CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
