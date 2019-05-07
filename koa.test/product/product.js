const tableName = 'public.users';
const Koa = require('koa')
const app = new Koa();
const { Pool } = require('pg')

app.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'koa-test',
    password: '123456', // По умолчанию пароля нет
    port: 5433, // Порт по умолчанию
});

module.exports = product = {
        getAll: async () => {
            return app.pool.query(`SELECT * from ${tableName}`);
        },
        get: async (id) => {
            let products = await app.pool.query(`SELECT * FROM ${tableName} WHERE id=${id}`);
            return products;
        },
        check: async ({login, password}) => {
            let check = await app.pool.query(`SELECT * FROM ${tableName} WHERE login = '${login}' AND password = '${password}'`);
            if (check.rowCount == 0) {
                let checkLogin = await app.pool.query(`SELECT * FROM ${tableName} WHERE login = '${login}'`);
                if (checkLogin.rowCount >= 1) {
                    return {
                        ok: 0,
                        error: 'password',
                    };
                } else {
                    return {
                        ok: 0,
                        error: 'login',
                        login: login
                    };
                }
            } else {
                return {
                    ok: 1,
                };
            }
        },
        create: async function ({id, login, password}) {
            let check = await app.pool.query(`SELECT * FROM ${tableName} WHERE login = '${login}'`);
            if (check.rowCount == 0) {
                let product = {login: String(login), password: String(password)};
                if (id > 0) product.id = Number(id);
                let result = await app.pool.query(`INSERT INTO ${tableName} (login, password) VALUES ('${login}','${password}')`);
                if (result.insertId) id = result.insertId;
                return {
                    ok: 'ok',
                };
            } else {
                return {
                    ok: 'isset'
                }
            }

        },
        update: async (id, product) => {
            if (typeof product === 'object') {
                let uProduct = {};
                if (product.hasOwnProperty('name')) uProduct.name = String(product.name);
                let result = await app.pool.query(`UPDATE ${tableName} SET ? WHERE id=?`, [uProduct, Number(id)]);
                return result.affectedRows;
            }
        },
        delete: async (id) => {
            let result = await app.pool.query(`DELETE FROM ${tableName} WHERE id=?`, [Number(id)]);
            return result.affectedRows;
        }
    };




