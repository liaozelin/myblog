import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostsService } from '../posts.service';

declare var layer: any;

@Component({
    moduleId: module.id,
    templateUrl: './detailPost.component.html',
    styles: [`
        .content
        {
            width: 1400px;
            height: 700px;
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
        .btns
        {
            margin: 10px 0;
        }
    `]
})

export class DetailPostComponent implements OnInit {
    form = {
        _id: '',
        title: '',
        tags: [],
        summary: '',
        category: 'none',
        content: '',
        createTime: 0,
        updateTime: 0
    };
    succeed = false;
    title = '文章详情';

    constructor(private postsService: PostsService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.postsService.getPost(params['id']) )
            .subscribe(form => this.form = form);
    }

    goBack(): void {
        this.location.back();
    }
}
