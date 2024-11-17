import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cardDataList: {
    title: string;
    count: number;
    icon?: string;
    color?: string;
  }[] = [
    {
      title: 'users',
      count: 50,
      icon: 'group',
    },
    {
      title: 'vaults',
      count: 30,
      icon: 'settings_applications',
    },
    {
      title: 'providers',
      count: 60,
      icon: 'apps',
    },
    {
      title: 'custom fields',
      count: 110,
      icon: 'code',
    },
    {
      title: 'attachments',
      count: 20,
      icon: 'attachment',
    },
    {
      title: 'shared',
      count: 10,
      icon: 'folder_shared',
    },
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.apiService
    // .request({ method: 'get', url: 'https://api.restful-api.dev/objects' })
    // .subscribe((response: any) => {
    // LoggerService.log(`Subscribed: ${response}`);
    // console.log('Subscribed: ', response);
    // this.CardDataList = response;
    // });
  }
}
