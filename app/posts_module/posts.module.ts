import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PostsRouterModule } from './posts-router.module';

import { PostsHomeComponent } from './posts-home.component';
import { PostsListComponent } from './posts-list.component';
import { PostDetailComponent } from './post-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PostsRouterModule
    ],
    declarations: [
        PostsHomeComponent,
        PostsListComponent,
        PostDetailComponent
    ]
})

export class PostsModule {}
