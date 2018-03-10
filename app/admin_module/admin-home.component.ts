import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';

declare var layer: any;

@Component({
    moduleId: module.id,
    templateUrl: './admin-home.component.html',

    styleUrls: ['./admin.css', '../../static/css/admin-sidebar-menu.css']
})

export class AdminHomwComponent {
    constructor(private postsService: PostsService,
                private router: Router) {}

    title = 'Add a new post.';
    loadAPI: Promise<any>;

    ngOnInit(): void {
        this.loadScriptStart();
    }

    quit(): void {
        layer.confirm('确定退出后台？', {
            btn: ['取消','确定'] //按钮
        }, function(){
            layer.msg('取消成功', {
                time: 1000
            });
        }, (function(postsService, router){
            return function() {
                postsService.quit()
                    .then(res => {
                        if (res.status === true) {
                            router.navigate(['/']);
                        }
                    });
            }
        })(this.postsService, this.router));
    }

    public loadScriptStart() {
        this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
    }

    public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = 'static/js/admin-sidebar-menu.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
