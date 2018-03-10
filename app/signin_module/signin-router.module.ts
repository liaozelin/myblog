import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin.component';
// import { Guard } from '../guard.service';

const signinRoutes: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(signinRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SigninRouterModule {}
