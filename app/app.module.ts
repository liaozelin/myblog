import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PostsModule } from './posts_module/posts.module';
import { AppRouterModule } from './app-router.module';

import { AppComponent }         from './app.component';

import { AuthGuard }                  from './guard.service';
import { PostsService } from './posts.service';

import { SigninRouterModule } from './signin_module/signin-router.module';
import { SigninComponent } from './signin_module/signin.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    PostsModule,
    SigninRouterModule
  ],
  declarations: [
    AppComponent,
    SigninComponent
  ],
  providers: [
    PostsService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
