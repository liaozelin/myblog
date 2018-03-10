"use strict";

const db = require('../model');
const Post = db.post;

const jsonType = 'application/json';

var getPosts = async (ctx, next) => {
    console.log("get posts from db...");
    var posts = [];
    var postsNumOfEachPage = 10;
    var index = parseInt(ctx.params.pageIndex) || 1;

    await Post.find().exec(function(err, data) {
        if (err) return console.log("search datas in db failed...");

        data = data.slice((index - 1) * postsNumOfEachPage, postsNumOfEachPage);
        data.forEach(function(post) {
            posts.push({
                id: post._id,
                title: post.title,
                summary: (post.summary === '' ? post.content.substr(0, 50) : post.summary) + '...',
                updateTime: new Date(post.updateTime)
            });
        });

        ctx.response.type = jsonType;
        ctx.response.body = {
            posts: posts
        };
    });
};

var getPostsAdmin = async (ctx, next) => {
    console.log("get posts(admin) from db...");
    var posts = [];
    var postsNumOfEachPage = 10;
    var index = parseInt(ctx.params.pageIndex) || 1;
    await Post.find().exec(function(err, data) {
        if (err) return console.log("search datas in db failed...");

        data = data.slice((index - 1) * postsNumOfEachPage, postsNumOfEachPage);
        data.forEach(function(post) {
            posts.push({
                id: post._id,
                title: post.title,
                category: post.category,
                tags: post.tags,
                createTime: post.createTime,
                updateTime: post.updateTime
            });
        });

        ctx.response.type = jsonType;
        ctx.response.body = {
            posts: posts
        };
    });
};

var getPost = async (ctx, next) => {
    console.log("get a post from db...");
    var id = ctx.params.id;
    await Post.findById(id).exec(function(err, data) {
        if (err) return console.log("find post failed...");

        if (data != null) {
            ctx.response.type = jsonType;
            ctx.response.body = {
                post: data
            };
        } else {
            ctx.response.body = {
                status: false
            };
        }
    });
};

var addPost = async (ctx, next) => {
    console.log("add a post to db...");
    ctx.response.type = jsonType;
    if (!ctx.request.body || ctx.request.body.title === '' || ctx.request.body.content === '') {
        ctx.response.body = {
            status: false
        };
    } else {
        var post = ctx.request.body;
        await Post.create(post, function(err, data) {
            if (err) {
                console.log("create a new post failed: " + err);
                ctx.response.body = {
                    status: false
                };
            } else {
                console.log("create a new post succeed: " + data.title + "...");
                ctx.response.body = {
                    status: true
                };
            }
        });
    }
};

var updatePost = async (ctx, next) => {
    console.log("update a post of db...");
    var id = ctx.params.id;
    var newPost = ctx.request.body;
    await Post.findById(id).exec(function(err, data) {
        if (err) return console.log("find post by id from db failed...");

        if (data != null) {
            data.title = newPost.title;
            data.summary = newPost.summary;
            data.content = newPost.content;
            data.tags = newPost.tags;
            data.category = newPost.category;
            data.updateTime = newPost.updateTime;
            data.save();
            ctx.response.body = {
                status: true
            };
        } else {
            ctx.response.body = {
                status: false
            };
        }
    });
};

var deletePost = async (ctx, next) => {
    console.log("delete a post from db...");
    var id = ctx.params.id;
    await Post.findById(id).exec(function(err, data) {
        if (err) return console.log("find post by id from db failed...");

        if (data != null) {
            data.remove();
            ctx.response.body = {
                status: true
            };
        } else {
            ctx.response.body = {
                status: false
            };
        }
    });
};

var getStatus = async (ctx, next) => {
    console.log("GET /getStatus...");
    ctx.response.body = {
        username: ctx.session.username,
        signin: ctx.session.signin
    };
}

var quit = async (ctx, next) => {
    console.log("GET /quit...");
    delete ctx.session.username;
    ctx.session.signin = false;
    ctx.response.body = {
        status: true
    };
};

module.exports = {
    'GET /api/posts/:pageIndex': getPosts,
    'GET /api/postsAdmin/:pageIndex': getPostsAdmin,
    'GET /api/post/:id': getPost,
    'POST /api/post': addPost,
    'PUT /api/post/:id': updatePost,
    'DELETE /api/post/:id': deletePost,
    'GET /api/status': getStatus,
    'GET /api/quit': quit
}
