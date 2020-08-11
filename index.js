// =======================================
//       Private Info Module Imports
// =======================================
require('dotenv').config();

// ================================
//       NPM Module Imports
// ================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

// ================================
//       Database Module Imports
// ================================
const db = require('./db/db');

// ================================
//       Class Module Imports
// ================================
const User = require('./models/User');

// ===============================================
//       Public & Body Parser Module Imports
// ===============================================
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Home Page
app.get('/', (req, res) => {
    res.send("Hello  you made it to the home page");
})

// Signup Page
app.post('/signup', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const user_password = req.body.user_password;
    const birthday = req.body.user_birthday;
    const phone_number = req.body.phone_number;

    User.createUser(firstname, lastname, email, username, user_password, birthday, phone_number);

    res.send(res);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})