import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { DeviceList } from './response.types';
import { LoggerService } from '../../core/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  DeviceList: DeviceList[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .request({ method: 'get', url: 'https://api.restful-api.dev/objects' })
      .subscribe((response: any) => {
        LoggerService.log(`Subscribed: ${response}`);
        // console.log('Subscribed: ', response);
        this.DeviceList = response;
      });
  }
}
