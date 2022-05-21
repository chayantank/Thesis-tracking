const express = require('express');
const mysql = require ('mysql');

const app = express();

// Create connection

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'nodemysql'
});


//connect

db.connect ((err) =>{
    if (err){
        throw err;
    }
    console.log('My Sql Connected.....');
} )

// create Db route

// app.get('/createdb',(req, res)=>{
//     let sql = 'CREATE DATABASE NODEMYSQL';
//     db.query(sql, (err,result) =>{
//         if (err) throw err;
//         console.log(result);
//         res.send('Database created....');

//     } )
// })

// create thesis table

// app.get('/createthesistable', (req,res) => {
//     let sql = 'CREATE TABLE thesis1( rfid int, status varchar (255), PRIMARY KEY (rfid))';
//     let query = db.query (sql, (err,result) => {
//         if (err) throw err;
//         console.log (result);
//         res.send('rfid fetched...')
//     })
// })



app.get('/:rfid', (req,res) => {
    let sql = `SELECT * FROM thesis WHERE rfid = ${req.params.rfid}`;
    let query = db.query (sql, (err,result) => {
        if (err) throw err;
        console.log (result);
        res.send('rfid fetched...')
    })
})



app.listen ('3000', ()=>{
    console.log('Server started on port 3000');
});