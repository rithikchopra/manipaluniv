const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'cruddatabase'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => {

    // const sqlInsert = "INSERT INTO userdetails (firstname, lastname) VALUES ('abc1245', 'abc1245')";
    // db.query(sqlInsert, (err, result) => {
    //     res.send("Hello11")
    // })

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const sqlInsert = "INSERT INTO userdetails (firstname, lastname) VALUES (?,?)" ;
    db.query(sqlInsert, [firstname, lastname], (err, result) => {
    console.log(result);
    })
});

app.listen(3002, () => {
    console.log('running 3002');
});