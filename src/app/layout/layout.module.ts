import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, SidenavContentComponent],
  imports: [
    CommonModule,
    CoreModule,
    NgIf,
    LayoutRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
  ],
})
export class LayoutModule {}
