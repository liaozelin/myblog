import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { SigninRouterModule } from './signin-router.module';
import { PostsService } from '../posts.service';

@Component({
    moduleId: module.id,
    templateUrl: './signin.component.html',
    // encapsulation: ViewEncapsulation.None,
    styleUrls: ['./signin.css']
})

export class SigninComponent {
    form = {
        username: '',
        password: ''
    };
    error = false;

    constructor(private postsService: PostsService, private router: Router) {}

    signin(): void {
        if (this.form.username === '' || this.form.password === '')
            return;
        this.postsService.signin(this.form)
            .then(res => {
                if (res.status === true) {
                    let navigationExtras: NavigationExtras = {
                        preserveQueryParams: true,
                        preserveFragment: true
                    };
                    this.router.navigate(['/admin'], navigationExtras);
                    // this.router.navigateByUrl('/admin');
                } else {
                    this.error = true;
                }
            })
    }
}
