import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoggerService } from '../../../core/services/logger.service';
import { HomeComponent } from '../../../dashboard/home/home.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // @ViewChild('sidenav') sidenav: any;
  @Output() sidenav = new EventEmitter<any>();
  isOpened: boolean = true;

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  sidebarToggle() {
    this.isOpened = !this.isOpened;
    this.sidenav.emit();
  }

  refreshCurrentPage() {
    // this.router.navigate(['http://localhost:4200/home/sidebar/dashboard']);
    window.location.reload();
  }

  searchHelp() {
    LoggerService.warn(`Help`);
    let dialogRef = this.dialog.open(HomeComponent, {
      data: { title: 'Help' },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      LoggerService.log('The dialog was closed');
    });
  }
}
