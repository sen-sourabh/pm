import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { LoggerService } from '../../services/logger.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss'],
})
export class PageheaderComponent {
  currentRoute!: string;
  text?: string;

  constructor(
    private route: Router,
    private platform: Platform,
  ) {
    LocalStorageService.set('Local', 'haha');
    SessionStorageService.set('Session', 'Wow');

    LoggerService.log(
      isPlatformBrowser(PLATFORM_ID)
        ? window.navigator.geolocation.getCurrentPosition((res) => this.getLocations(res))
        : '',
    );
  }

  ngOnInit() {
    this.currentRoute = this.route.url;
  }

  getLocations(res: unknown) {
    console.log('RES: ', res);
  }
}
