import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AuthGuard }                  from './guard.service';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: 'app/admin_module/admin.module#AdminModule'
    },
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRouterModule {}
