// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.createConnection('mongodb://localhost/myblog');

// // var commentSchema = new mongoose.Schema({
// //     author: {
// //         type: String,
// //         unique: true
// //     },
// //     content: String
// // });

// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//     summary: String,
//     categories: String,
//     tags: [String],
//     createTime: Date,
//     updateTime: Date
// });

// // postSchema.static.getOne = function(_id, callback) {
// //     return this.findOne({'_id': _id}, callback);
// // }
// var postModel = mongoose.model('post', postSchema);

// module.exports = postModel;

module.exports = {
    title: String,
    content: String,
    summary: String,
    category: String,
    tags: [String],
    createTime: Number,
    updateTime: Number
}
