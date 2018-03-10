import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PostsService } from '../posts.service';

declare var layer: any;

@Component({
    moduleId: module.id,
    templateUrl: './editPost.component.html',
    styles: [`
        .content
        {
            width: 1300px;
            height: 660px;
            padding: 20px 0;
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

export class EditPostComponent implements OnInit {
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
    title = '修改文章';

    constructor(private postsService: PostsService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.postsService.getPost(params['id']))
            .subscribe(form => this.form = form);
    }

    submitPost(): void {
        if (this.form.title === '' || this.form.summary === '' || this.form.content === ''
            || this.form.tags === []) return;

        this.form.updateTime = Date.now();
        layer.confirm('确定修改文章？', {
            btn: ['取消','确定'] //按钮
        }, function(){
            layer.msg('取消成功', {
                time: 1000
            });
        }, (function(postsService, form, router){
            return function() {
                postsService.updatePost(form)
                .then(res => {
                    if (res.status === false) {
                        layer.msg('修改文章失败');
                    } else {
                        layer.msg('修改成功', {
                            icon: 1,
                            time: 1000 //1s后自动关闭
                        }, function() {
                            // 关闭后自动执行
                            router.navigate(['/admin/managerPost']);
                            // window.open('/posts/' + form._id);
                        });;
                    }
                })
            }
        })(this.postsService, this.form, this.router));
    }

    goBack(): void {
        this.location.back();
    }
}
