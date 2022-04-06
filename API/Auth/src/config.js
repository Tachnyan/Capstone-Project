import mysql from 'mysql';
import session from'express-session';
import  MySQLStore  from 'express-mysql-session'



import path from 'path';
import {config} from 'dotenv';
config({path: path.resolve(process.cwd(), '../../.env')})


var Store = MySQLStore(session)
const pconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};


const pool = mysql.createPool(pconfig);
const sessionStore = new Store({}, pool);


export { pool, sessionStore } ;