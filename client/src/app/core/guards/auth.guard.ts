import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "src/app/account/account.service";
import { inject } from "@angular/core";
import { map, catchError, of } from "rxjs";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AccountService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    map(auth => {
      if (auth) return true;
      else {
        router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    })
  );
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
