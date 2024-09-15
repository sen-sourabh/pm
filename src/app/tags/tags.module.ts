import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { AddTagComponent } from './add-tag/add-tag.component';
import { AllTagsComponent } from './all-tags/all-tags.component';
import { TagsRoutingModule } from './tags-routing.module';

@NgModule({
  declarations: [AllTagsComponent, AddTagComponent],
  imports: [CoreModule, CommonModule, TagsRoutingModule],
})
export class TagsModule {}
