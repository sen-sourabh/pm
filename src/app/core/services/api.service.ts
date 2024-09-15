import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  request(context: {
    method?: string;
    url?: string;
    path?: string;
    body?: Record<string, unknown>;
  }): any {
    try {
      const { method, url, path, body } = context;
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      if (url) {
        return this.http.request<any>(method!, url, { body, headers });
      }
      return this.http.request<any>(method!, `http://localhost:4000/api${path}`, { body, headers });
    } catch (error) {
      LoggerService.error(`ApiService Error: ${error}`);
      // console.log(`ApiService Error: ${error}`);
    }
  }
}
