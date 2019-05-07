const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:123456@localhost:2479/koa-test');

const Users = db.define('users', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    image: Sequelize.STRING,
});

db.sync();



module.exports = {
    db,
    Users,
};



