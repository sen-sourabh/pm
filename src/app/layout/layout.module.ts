import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    NgIf,
    LayoutRoutingModule,
    SidebarComponent,
    SidenavContentComponent,
  ],
})
export class LayoutModule {}
