import mysql from 'mysql'

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studygroupdb',
};

const pool = mysql.createPool(config);

export default  pool ;