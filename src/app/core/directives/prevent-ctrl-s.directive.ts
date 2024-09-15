import { Directive, HostListener } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Directive({
  selector: '[appPreventCtrlS]',
})
export class PreventCtrlSDirective {
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && (event.key === 's' || (event.metaKey && event.key === 'S'))) {
      event.preventDefault();
    }
    if (window.navigator?.platform === 'MacIntel' && event.metaKey && (event.key === 's' || event.key === 'S')) {
      event.preventDefault();
    }
  }
}
