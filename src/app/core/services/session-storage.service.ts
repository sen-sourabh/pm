import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
// Session Storage clears when the page session ends or browser tab will be closed
export class SessionStorageService {
  constructor() {}

  static set(key: string, value: string | unknown | any): string | void {
    try {
      typeof value === 'object'
        ? sessionStorage.setItem(key, JSON.stringify(value))
        : sessionStorage.setItem(key, value);
    } catch (error) {
      LoggerService.error(`SessionStorageService Set: ${error}`);
      // console.log(`SessionStorageService Set: ${error}`);
      return `SessionStorageService Set: ${error}`;
    }
  }

  static get(key: string): Record<string, unknown>[] | Record<string, unknown> | string | number | null {
    try {
      const value = sessionStorage.getItem(key);
      if (value?.startsWith('{') || value?.startsWith('[')) {
        return JSON.parse(value);
      } else if (/^\d+$/.test(value!)) {
        return +value!;
      }
      return value;
    } catch (error) {
      LoggerService.error(`SessionStorageService Get: ${error}`);
      // console.log(`SessionStorageService Get: ${error}`);
      return `SessionStorageService Get: ${error}`;
    }
  }

  static remove(key: string): string | void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      LoggerService.error(`SessionStorageService Remove: ${error}`);
      // console.log(`SessionStorageService Remove: ${error}`);
      return `SessionStorageService Remove: ${error}`;
    }
  }

  static clear(): string | void {
    try {
      sessionStorage.clear();
    } catch (error) {
      LoggerService.error(`SessionStorageService Clear: ${error}`);
      // console.log(`SessionStorageService Clear: ${error}`);
      return `SessionStorageService Clear: ${error}`;
    }
  }

  static size(): number | string {
    try {
      return sessionStorage.length;
    } catch (error) {
      LoggerService.error(`SessionStorageService Size: ${error}`);
      // console.log(`SessionStorageService Size: ${error}`);
      return `SessionStorageService Size: ${error}`;
    }
  }
}
