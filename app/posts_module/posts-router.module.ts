import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsHomeComponent } from './posts-home.component';
import { PostsListComponent } from './posts-list.component';
import { PostDetailComponent } from './post-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PostsHomeComponent,
        children: [
            {
                path: 'posts',
                component: PostsListComponent
            },
            {
                path: 'post/:id',
                component: PostDetailComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PostsRouterModule {}
