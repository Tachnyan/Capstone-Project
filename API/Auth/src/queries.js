import { pool } from './config.js'
import mysql from 'mysql'
import argon2 from 'argon2'
import { randomUUID, createHash, randomInt, randomBytes } from 'crypto';
import crypto from 'crypto';

crypto.rand
import { getMaxListeners } from 'process';

import mailer from './mailer.js'
import { appendFileSync } from 'fs'

async function register(data){

    return new Promise(async (res, rej) => {
        try
        {

            
            pool.getConnection((err, connection) => {
                if (err){
                    console.log(err);
                    rej(500);
                }else{
                    //First Query: make sure account with given username doesn't exist already.
                    var sql = "SELECT Login_User FROM Login WHERE Login_User = ? ;";
                    var insert = [data.username];
                    sql = mysql.format(sql, insert);
                connection.query(sql, (err, result) => {
                    if (result.length > 0){
                        connection.release();
                        rej(400);
                    }else{
                        let uuid = randomUUID()
                        sql = "INSERT INTO Student VALUES (?, ?, ?, NULL);" 
                        insert = [uuid, data.first, data.last] 
                        sql = mysql.format(sql, insert)
                        connection.query(sql, async (err, result) =>{
                            if(err){
                                console.log(err);
                                rej(500);

                            }else{
                                //Hash the submitted password. salt is generated randomly.
                                const promise = argon2.hash(data.password, { hashLength: 128});
                                let hash = await promise;
                                //create verification code for email
                                const vCode = crypto.randomBytes(32).toString('hex');
                                //create expiration date of code
                                var expirationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
                                //Third Query: Insert new row into login table. 
                                sql = "INSERT INTO Login VALUES (?, ?, ?, ?, ?, ?);"
                                insert = [data.username, hash, uuid, 0, vCode, expirationDate]
                                sql = mysql.format(sql, insert)
                                connection.query(sql, (err, result) => {
                                    if(err){
                                        console.log(err);
                                        rej(500);
                                    }else{
                                        mailer(data.first, data.username,vCode);
                                        res(200);
                                    }
                                    connection.release();
                                })
                            }
                        })

                    }
                })
            }
            
        })
        
    }catch{

    }
    });
   
}

async function login(data){

    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            }else{
                //First Query: Look for given username and grab all fields.
                let sql = "SELECT * FROM Login WHERE Login_User = ?;"
                let insert = [data.username]
                sql = mysql.format(sql, insert)
                connection.query(sql, async (err, result, fields) => {
                    if (err) {
                        rej(500)
                        console.log(err)
                    }else if (result.length == 1){
                        //Authenticate given password with hashed password in database. 
                        let auth = await argon2.verify(result[0].Login_Pass, data.password)
                        if(auth){
                            res(result[0].Student_Student_ID)
                        }else{
                            rej(400)
                        }
                    }
                })
            }
            connection.release()
        })
    });

}

async function verify(data){
    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err);
            }else{
                //Query: Update account to active where token matches
                let sql = "UPDATE login SET active = 1 WHERE Hash_Verification = ?;"
                let insert = [data.username] //needs to be hashed code
                sql = mysql.format(sql, insert)
                connection.query(sql, async (err, result, fields) => {
                    if (err) {
                        rej(500)
                        console.log(err)
                    }
                })
            }
        })
    });

    return res.redirect('http://localhost:3001/login');
}

export { register, login }