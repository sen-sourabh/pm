import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  static log(value: unknown): void {
    console.log(value);
  }

  static debug(value: unknown): void {
    console.debug(value);
  }

  static error(value: unknown): void {
    console.error(value);
  }

  static info(value: unknown): void {
    console.info(value);
  }

  static table(value: unknown): void {
    console.table(value);
  }

  static warn(value: unknown): void {
    console.warn(value);
  }
}
