import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
    moduleId: module.id,
    templateUrl: './managePosts.component.html',
    styles: [`
        .content
        {
            width: 1400px;
            position: relative;
            padding: 20px 20px;
            margin: 90px auto 0 auto;
            background-color: #fff;
        }
        .title
        {
            font-size: 20px;
            position: relative;
            top: 50px;
            padding: 15px 0 15px 30px;
            background-color: white;
        }
    `]
})

export class ManagePostComponent implements OnInit {
    posts: Post[] = [];
    title = '文章管理';

    constructor(private postsService: PostsService,
                private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.getPosts(1);
    }

    getPosts(index: number): void {
        this.postsService.getPostsAdmin(index).then(posts => {
            this.posts = posts
        });
    }
}
