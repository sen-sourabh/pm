import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTagComponent } from './add-tag/add-tag.component';
import { AllTagsComponent } from './all-tags/all-tags.component';

const routes: Routes = [
  {
    path: '',
    component: AllTagsComponent,
  },
  {
    path: 'add-tag',
    component: AddTagComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
