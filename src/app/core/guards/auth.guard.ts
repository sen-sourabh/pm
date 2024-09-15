import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { LoggerService } from '../services/logger.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();

  if (LocalStorageService.get('signin')) {
    LoggerService.log(route.root);
    LoggerService.log(state?.url);

    LoggerService.log(state);

    return true;
  }
  return false;
};
