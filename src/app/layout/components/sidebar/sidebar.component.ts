import { Component, ViewChild } from '@angular/core';
import { SidebarMenus } from '../../helpers/layout';
import { SidebarMenusType } from '../../types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav: any;
  panelOpenState: boolean = false;
  layout: SidebarMenusType[] = SidebarMenus;
  isOpened: boolean = true;

  constructor() {}

  handleSideNavToggle() {
    console.log(this.sidenav);
    this.sidenav.toggle();
  }
}
