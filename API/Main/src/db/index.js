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
        pool.query('SELECT * FROM Studygroup, Studygroup_Has_Course GROUP BY Studygroup_ID = Studygroup_Studygroup_ID', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};


function addfriend(data){

    return new Promise((resolve, reject) => {
        var sql = 'INSERT INTO Student_Has_Friend VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));';
        var insert = [null, data.userID, data.friendUsername];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            else{
                sql = 'INSERT INTO Student_Has_Friend VALUES (?, (SELECT Student_Student_ID FROM Login WHERE Login_User = ?), (SELECT Student_ID FROM Student WHERE Student_ID = ?));';
                insert = [null, data.friendUsername, data.userID];
                sql = mysql.format(sql, insert);
                pool.query(sql, (err, results) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(results);
                });
            };
        });
    });
};

function ignoreuser(data){

    return new Promise((resolve, reject) => {
        var sql = 'INSERT INTO Student_Has_Blocked VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));';
        var insert = [null, data.userID, data.ignoreUsername];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(200);
            };
        });
    });
};


export {friends, classmates, profile, studygroups, addfriend, ignoreuser};