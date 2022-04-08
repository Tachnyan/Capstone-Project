import mysql from 'mysql';
import { pool } from '../config.js'



function friends(){

    return new Promise((resolve, reject) => {
      
        pool.query('SELECT Student_First, Student_Last FROM Student WHERE Student_ID IN (SELECT Student_Friended_ID FROM Student_Has_Friend WHERE Student_User_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\')', (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function classmates(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT Student_First, Student_Last FROM Student WHERE Student_ID IN (SELECT Student_Student_ID from Student_Has_Course WHERE Course_Course_ID IN (SELECT Course_Course_ID FROM Student_Has_Course WHERE Student_Student_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\'))', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function profile(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Student WHERE Student_ID = \'9a8349b3-abf6-11ec-90c1-7c10c952a9ce\'', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function studygroups(){

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Studygroup', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function addfriend(data){

    return new Promise((resolve, reject) => {
        var sql = 'INSERT INTO Student_has_Friend VALUES (?, ?);';
        var insert = ['9a8349b3-abf6-11ec-90c1-7c10c952a9ce', data.username];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};


export {friends, classmates, profile, studygroups, addfriend};