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
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(401)
      }
      req.user = user;
      next();
    });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
}

function validateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.tokenData = decoded;
      next();
    });
}

app.get('/me', authenticateToken, (req, res) => {
    res.send(req.user);
});

app.post('/refreshToken', (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
        return res.sendStatus(401)
    }
    delete user.iat;
    delete user.exp;
    const refreshedToken = generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = md5(req.body.password);
    var sql = 'SELECT * FROM users WHERE email = ? AND mot_de_passe = ?'
    db.query(sql,[email,password],
        (err,result) => {
            if (err) {
                res.status(500);
            } else {
                if (result.length > 0) {
                    console.log("connecté");  
                    const accessToken = generateAccessToken(email);
                    res.json({
                        token: `Bearer ${accessToken}`,
                      });  
                    res.status(200);    
                    console.log(accessToken); 
                }
                else {
                    console.log("invalid credentials");
                    res.status(401);
                }
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});