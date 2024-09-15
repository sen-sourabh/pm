import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CipherService {
  constructor() {}

  static encrypt(value: string | unknown | any) {
    try {
      return typeof value === 'object' ? window.btoa(JSON.stringify(value)) : window.btoa(value);
    } catch (error) {
      LoggerService.error(`CipherService encrypt: ${error}`);
      // console.log(`LocalStorageService Set: ${error}`);
      return `CipherService encrypt: ${error}`;
    }
  }

  static decrypt(encryptedText: string) {
    try {
      const value = window.atob(encryptedText);
      if (value?.startsWith('{') || value?.startsWith('[')) {
        return JSON.parse(value);
      } else if (/^\d+$/.test(value!)) {
        return +value!;
      }
      return value;
    } catch (error) {
      LoggerService.error(`CipherService encrypt: ${error}`);
      // console.log(`LocalStorageService Set: ${error}`);
      return `CipherService encrypt: ${error}`;
    }
  }
}
