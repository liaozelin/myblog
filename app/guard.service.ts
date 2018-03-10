import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';

import { PostsService } from './posts.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private router: Router,
                private postsService: PostsService) {}

    isSignedIn = false;

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        await this.postsService.getStatus()
                .then(res => {
                    this.isSignedIn = res.signin;
                    if (this.isSignedIn === false) {
                        this.router.navigate(['/signin']);
                    }
                })
        return this.isSignedIn;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: ActivatedRouteSnapshot): boolean {
        return true;
    }
}
