import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AdminRouterModule } from './admin-router.module';

import { AdminHomwComponent } from './admin-home.component';
import { AddPostComponent } from './addPost.component';
import { EditPostComponent } from './editPost.component';
import { DetailPostComponent } from './detailPost.component';
import { ManagePostComponent } from './managePosts.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRouterModule
    ],
    declarations: [
        AdminHomwComponent,
        AddPostComponent,
        EditPostComponent,
        DetailPostComponent,
        ManagePostComponent
    ],
    providers: []
})

export class AdminModule {}
