import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { SocketService } from "../socket.service";

@Injectable({
  providedIn: "root"
})
export class AuthorizationGuard implements CanActivate {
  constructor(private socketService: SocketService, private _route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.socketService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this._route.navigate(["login"]);
          return false;
        }
        return true;
      })
    );
  }
}
