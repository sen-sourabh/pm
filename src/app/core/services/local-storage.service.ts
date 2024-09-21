import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
// Local Storage saves data across browser sessions
export class LocalStorageService {
  private static storage: Storage | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      LocalStorageService.storage = window.localStorage;
    }
  }

  static set(key: string, value: string | unknown | any): string | void {
    try {
      typeof value === 'object'
        ? this.storage?.setItem(key, JSON.stringify(value))
        : this.storage?.setItem(key, value);
    } catch (error) {
      LoggerService.error(`LocalStorageService Set: ${error}`);
      return `LocalStorageService Set: ${error}`;
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
      LoggerService.error(`LocalStorageService Get: ${error}`);
      return `LocalStorageService Get: ${error}`;
    }
  }

  static remove(key: string): string | void {
    try {
      this.storage?.removeItem(key);
    } catch (error) {
      LoggerService.error(`LocalStorageService Remove: ${error}`);
      return `LocalStorageService Remove: ${error}`;
    }
  }

  static clear(): string | void {
    try {
      this.storage?.clear();
    } catch (error) {
      LoggerService.error(`LocalStorageService Clear: ${error}`);
      return `LocalStorageService Clear: ${error}`;
    }
  }

  static size(): number | string {
    try {
      return this.storage?.length ?? 0;
    } catch (error) {
      LoggerService.error(`LocalStorageService Size: ${error}`);
      return `LocalStorageService Size: ${error}`;
    }
  }
}
