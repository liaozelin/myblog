import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
    moduleId: module.id,
    templateUrl: './posts-home.component.html',
    styleUrls: ['../../static/css/posts-sidebar.css']
})

export class PostsHomeComponent implements OnInit {
    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.loadScriptStart();
    }

    loadAPI: Promise<any>;

    public loadScriptStart() {
        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
    }

    public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = 'static/js/posts-sidebar.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
