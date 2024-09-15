import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
// Local Storage saves data across browser sessions
export class LocalStorageService {
  constructor() {}

  static set(key: string, value: string | unknown | any): string | void {
    try {
      typeof value === 'object' ? localStorage.setItem(key, JSON.stringify(value)) : localStorage.setItem(key, value);
    } catch (error) {
      LoggerService.error(`LocalStorageService Set: ${error}`);
      // console.log(`LocalStorageService Set: ${error}`);
      return `LocalStorageService Set: ${error}`;
    }
  }

  static get(key: string): Record<string, unknown>[] | Record<string, unknown> | string | number | null {
    try {
      const value = localStorage.getItem(key);
      if (value?.startsWith('{') || value?.startsWith('[')) {
        return JSON.parse(value);
      } else if (/^\d+$/.test(value!)) {
        return +value!;
      }
      return value;
    } catch (error) {
      LoggerService.error(`LocalStorageService Get: ${error}`);
      // console.log(`LocalStorageService Get: ${error}`);
      return `LocalStorageService Get: ${error}`;
    }
  }

  static remove(key: string): string | void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      LoggerService.error(`LocalStorageService Remove: ${error}`);
      // console.log(`LocalStorageService Remove: ${error}`);
      return `LocalStorageService Remove: ${error}`;
    }
  }

  static clear(): string | void {
    try {
      localStorage.clear();
    } catch (error) {
      LoggerService.error(`LocalStorageService Clear: ${error}`);
      // console.log(`LocalStorageService Clear: ${error}`);
      return `LocalStorageService Clear: ${error}`;
    }
  }

  static size(): number | string {
    try {
      return localStorage.length;
    } catch (error) {
      LoggerService.error(`LocalStorageService Size: ${error}`);
      // console.log(`LocalStorageService Size: ${error}`);
      return `LocalStorageService Size: ${error}`;
    }
  }
}
