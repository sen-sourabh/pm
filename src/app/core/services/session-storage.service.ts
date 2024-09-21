import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
// Session Storage clears when the page session ends or browser tab will be closed
export class SessionStorageService {
  private static storage: Storage | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      SessionStorageService.storage = window.sessionStorage;
    }
  }

  static set(key: string, value: string | unknown | any): string | void {
    try {
      typeof value === 'object'
        ? this.storage?.setItem(key, JSON.stringify(value))
        : this.storage?.setItem(key, value);
    } catch (error) {
      LoggerService.error(`SessionStorageService Set: ${error}`);
      // console.log(`SessionStorageService Set: ${error}`);
      return `SessionStorageService Set: ${error}`;
    }
  }

  static get(
    key: string,
  ): Record<string, unknown>[] | Record<string, unknown> | string | number | null {
    try {
      const value = this.storage?.getItem(key);
      if (value?.startsWith('{') || value?.startsWith('[')) {
        return JSON.parse(value);
      } else if (/^\d+$/.test(value!)) {
        return +value!;
      }
      return value ?? null;
    } catch (error) {
      LoggerService.error(`SessionStorageService Get: ${error}`);
      // console.log(`SessionStorageService Get: ${error}`);
      return `SessionStorageService Get: ${error}`;
    }
  }

  static remove(key: string): string | void {
    try {
      this.storage?.removeItem(key);
    } catch (error) {
      LoggerService.error(`SessionStorageService Remove: ${error}`);
      // console.log(`SessionStorageService Remove: ${error}`);
      return `SessionStorageService Remove: ${error}`;
    }
  }

  static clear(): string | void {
    try {
      this.storage?.clear();
    } catch (error) {
      LoggerService.error(`SessionStorageService Clear: ${error}`);
      // console.log(`SessionStorageService Clear: ${error}`);
      return `SessionStorageService Clear: ${error}`;
    }
  }

  static size(): number | string {
    try {
      return this.storage?.length ?? 0;
    } catch (error) {
      LoggerService.error(`SessionStorageService Size: ${error}`);
      // console.log(`SessionStorageService Size: ${error}`);
      return `SessionStorageService Size: ${error}`;
    }
  }
}
