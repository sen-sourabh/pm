import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '../../../core/core.module';
import { SidebarMenus } from '../../helpers/layout';
import { LayoutRoutingModule } from '../../layout-routing.module';
import { SidebarMenusType } from '../../types';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SidenavContentComponent } from "../sidenav-content/sidenav-content.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    NgIf,
    LayoutRoutingModule,
    MatSidenavModule,
    MatIconModule,
    SidenavContentComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav: any;
  panelOpenState: boolean = false;
  layout: SidebarMenusType[] = SidebarMenus;
  isOpened: boolean = true;

  constructor() { }

  handleSideNavToggle() {
    this.sidenav.toggle();
  }
}
