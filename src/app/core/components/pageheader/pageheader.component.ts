import { Component } from '@angular/core';
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

  constructor(private route: Router) {
    LocalStorageService.set('Local', 'haha');
    SessionStorageService.set('Session', 'Wow');

    console.log(window.navigator.geolocation.getCurrentPosition((res) => this.getLocations(res)));

    LoggerService.log(window);
  }

  ngOnInit() {
    this.currentRoute = this.route.url;
  }

  getLocations(res: unknown) {
    console.log('RES: ', res);
  }
}
