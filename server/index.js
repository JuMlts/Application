// server/index.js
const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
var md5 = require('md5');
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'W9rs3np4!',
    database: 'users'
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
  }

//const accessToken = generateAccessToken(user);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = md5(req.body.password);
    var sql = 'SELECT * FROM users WHERE email = ? AND mot_de_passe = ?'
    var sqlres = db.query(sql,[email,password],
        (err,result) => {
            if (err) {
                return null;
            } else {
                return result;
            }
        }
    );
    if ((req.body.email !== sqlres.values[0]) || (req.body.email !== sqlres.values[1])) {
        res.status(401).send('invalid credentials');
        return ;
    } else {
        console.log("ok");
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});