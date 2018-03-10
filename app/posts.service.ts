import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostsService {
    constructor(private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    private headers = new Headers({'Content-Type': 'application/json'});

    getPosts(index: number): Promise<Post[]> {
        return this.http.get('api/posts/' + index.toString())
                    .toPromise()
                    .then(response => response.json().posts as Post[])
                    .catch(this.handleError);
    }

    getPostsAdmin(index: number): Promise<Post[]> {
        return this.http.get('api/postsAdmin/' + index.toString())
                    .toPromise()
                    .then(response => response.json().posts as Post[])
                    .catch(this.handleError);
    }

    getPost(id: string): Promise<Post> {
        return this.http.get('api/post/' + id)
                    .toPromise()
                    .then(response => response.json().post as Post)
                    .catch(this.handleError);
    }

    updatePost(post: any): Promise<any> {
        return this.http.put('api/post/' + post._id, post)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    addPost(post: Post): Promise<any> {
        return this.http.post('api/post', post)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    deletePost(post: Post): Promise<any> {
        return this.http.delete('api/post/' + post.id)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }

    signin(form: Object): any {
        return this.http.post('signin', form)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    getStatus(): any {
        return this.http.get('api/status')
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    quit(): Promise<any> {
        return this.http.get('api/quit')
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }
}

