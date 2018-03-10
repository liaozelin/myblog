// 自动导入/models中定义的数据类型
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myblog');
// var connect = mongoose.createConnection('mongodb://localhost/myblog');
console.log("init mongoose and connect to mongodb://localhost/myblog...");

var db = {};

fs.readdirSync('./models')
    .filter(function(f) {
        return (f.endsWith('.js') && f !== 'index.js');
    })
    .forEach(function(f) {
        console.log(`import model from file ${f}...`);
        var name = f.substring(0, f.length - 3);
        var newType = require(__dirname + '/models/' + f);
        var newSchema = new mongoose.Schema(newType);
        db[name] = mongoose.model(name, newSchema);
    });

module.exports = db;
