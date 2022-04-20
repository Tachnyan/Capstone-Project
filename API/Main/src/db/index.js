import mysql from 'mysql';
import { format } from 'path';
import { pool } from '../config.js'



function friends(data){
    
    return new Promise((resolve, reject) => {
        let sql = `SELECT Student_First, Student_Last FROM Student 
                   WHERE Student_ID IN (SELECT Student_Friended_ID FROM Student_Has_Friend WHERE Student_User_ID = ?)`
        let insert = [data.userID]
        sql = mysql.format(sql, insert)

        pool.query(sql, (err, results) => {

            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });

};

function classmates(data){
    return new Promise((resolve, reject) => {
        let sql = `SELECT Student_First, Student_Last
                   FROM Student 
                   WHERE Student_ID IN (SELECT Student_Student_ID from Student_Has_Course WHERE Course_Course_ID IN (SELECT Course_Course_ID FROM Student_Has_Course WHERE Student_Student_ID = ?) AND Student_Student_ID != ?)`
        let insert = [data.userID, data.userID]
        sql = mysql.format(sql, insert)
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function profile(data){
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM Student WHERE Student_ID = ?`
        let insert = [data.userID]
        sql = mysql.format(sql, insert)
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

function studygroups(){
    return new Promise((resolve, reject) => {
        var sql = `SELECT Studygroup_ID, Course_Subject, Course_Number, Studygroup_Location, Studygroup_Material, COUNT(Student_Student_ID) AS Student_Count, Studygroup_Start, Studygroup_End 
                   FROM Studygroup_Has_Student AS SHS, Studygroup, Course, Studygroup_Has_Course 
                   WHERE SHS.Studygroup_Studygroup_ID = Studygroup_ID AND Course_Course_ID = Course_ID;`;
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};


function addfriend(data){
    return new Promise((resolve, reject) => {
        var sql = `INSERT INTO Student_Has_Friend 
                   VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));`;
        var insert = [null, data.userID, data.friendUsername];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                return reject(err);
            }
            else{
                sql = `INSERT INTO Student_Has_Friend
                       VALUES (?, (SELECT Student_Student_ID FROM Login WHERE Login_User = ?), (SELECT Student_ID FROM Student WHERE Student_ID = ?));`;
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
        var sql = `INSERT INTO Student_Has_Blocked
                   VALUES (?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Student_Student_ID FROM Login WHERE Login_User = ?));`;
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

function addcourse(data){
    return new Promise((resolve, reject) =>{
        var sql = `INSERT INTO Student_Has_Course
                   VALUES(?, (SELECT Student_ID FROM Student WHERE Student_ID = ?), (SELECT Course_ID FROM Course WHERE Course_Subject = ? AND Course_Number = ? AND Course_Section = ?));`
        var insert = [null, data.userID, data.courseSubject, data.courseNumber, data.courseSection];
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
}

function setpreferredname(data){
    return new Promise((resolve, reject) => {
        var sql = `UPDATE Student SET Student_Preferred = ? WHERE Student_ID = ?`;
        var insert = [data.preferredName, data.userID];
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
}

function studentcourses(data){
    return new Promise((resolve, reject) => {
        var sql = `SELECT Course_ID, Course_Subject, Course_Number, Course_Section, Course_Instructor
                   FROM Student_Has_Course, Course 
                   WHERE Student_Student_ID = ? AND Course_ID = Course_Course_ID`;
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}

function deletecourse(data){
    return new Promise((resolve, reject) => {
        var sql = `DELETE FROM Student_Has_Course WHERE Student_Student_ID = ? AND Course_Course_ID = ?`;
        var insert = [data.userID, data.courseID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(200);
            };
        });
    });
}

function friendrequests(data){
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT Student.Student_First, Student.Student_Last FROM Student WHERE Student.Student_ID = (SELECT Student_Has_Pending.Student_Pending_ID FROM Student_Has_Pending WHERE Student_Has_Pending.Student_User_ID = ?);'
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}

function ignorelist(data){
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT Student.Student_First, Student.Student_Last FROM Student WHERE Student.Student_ID = (SELECT Student_Has_Pending.Student_Pending_ID FROM Student_Has_Pending WHERE Student_Has_Pending.Student_User_ID = ?);'
        var insert = [data.userID];
        sql = mysql.format(sql, insert);
        pool.query(sql, (err, results) => {
            if(err){
                reject(err);
            }
            else{
                resolve(results);
            };
        });
    });
}


export {friends, classmates, profile, studygroups, addfriend, ignoreuser, addcourse, deletecourse, setpreferredname, studentcourses, friendrequests, ignorelist};
