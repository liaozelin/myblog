import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostsService } from '../posts.service';

@Component({
    moduleId: module.id,
    templateUrl: './post-detail.component.html'
})

export class PostDetailComponent implements OnInit {
    post = {};

    constructor(private postsService: PostsService,
                private router: ActivatedRoute,
                private location: Location) {}

    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => this.postsService.getPost(params['id']))
            .subscribe(post => this.post = post);
    }

    goBack(): void {
        this.location.back();
    }
}
