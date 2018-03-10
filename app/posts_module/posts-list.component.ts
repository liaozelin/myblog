import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostsService } from '../posts.service';

@Component({
    moduleId: module.id,
    templateUrl: './posts-list.component.html'
})

export class PostsListComponent implements OnInit {
    posts = [];

    constructor(private postsService: PostsService,
                private router: ActivatedRoute,
                private location: Location) {}

    ngOnInit(): void {
        this.getPosts(1);
    }

    getPosts(index: number): void {
        this.postsService.getPosts(index).then(posts => this.posts = posts);
    }
}
