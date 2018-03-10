import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomwComponent } from './admin-home.component';
import { AddPostComponent } from './addPost.component';
import { EditPostComponent } from './editPost.component';
import { DetailPostComponent } from './detailPost.component';
import { ManagePostComponent } from './managePosts.component';

import { AuthGuard } from '../guard.service';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminHomwComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'addPost',
                pathMatch: 'full'
            },
            {
                path: 'addPost',
                component: AddPostComponent
            },
            {
                path: 'editPost/:id',
                component: EditPostComponent
            },
            {
                path: 'detailPost/:id',
                component: DetailPostComponent
            },
            {
                path: 'managerPost',
                component: ManagePostComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRouterModule {}
