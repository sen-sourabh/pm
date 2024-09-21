import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from '../../../core/core.module';
import { LayoutRoutingModule } from '../../layout-routing.module';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    NgIf,
    LayoutRoutingModule,
    MatSidenavModule,
  ],
})
export class SidenavContentComponent {}
