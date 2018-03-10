const crypto = require('crypto');

const db = require('../model');
const admin = require('../admin');

var signin = async (ctx, next) => {
    console.log("POST /signin");
    var query = ctx.request.body;
    var hash = crypto.createHash('md5');
    var user = await db.user.findOne({username: query.username});
    if (!!user && hash.update(query.password).digest('hex') === user.password) {
        ctx.session.username = 'admin';
        ctx.session.signin = true;
        ctx.response.type = 'application/json';
        ctx.response.body = {
            status: true
        };
    } else {
        ctx.response.type = 'application/json';
        ctx.response.body = {
            status: false
        };
    }
}

module.exports = {
    'POST /signin': signin
}
