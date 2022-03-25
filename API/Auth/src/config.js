import mysql from 'mysql';
import session from'express-session';
import  MySQLStore  from 'express-mysql-session'
var Store = MySQLStore(session)


const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studygroupdb',
};


const pool = mysql.createPool(config);
const sessionStore = new Store({}, pool);


export { pool, sessionStore } ;