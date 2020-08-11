const db = require('../db/db');


class User {
    constructor(id, firstname, lastname, email, username, user_password, birthday, phone_number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.user_password = user_password;
        this.birthday = birthday;
        this.phone_number = phone_number;
    }

    static createUser(firstname, lastname, email, username, user_password, birthday, phone_number) {
        return db.one(
            `insert into users 
            (firstname, lastname, email, username, user_password, birthday, phone_number)
            values 
            ($1, $2, $3, $4, $5, $6, $7) returning id, firstname, lastname, email, username, user_password, birthday, phone_number`,
            [firstname, lastname, email, username, user_password, birthday, phone_number]
        ).then((result) => {
            console.log(result);
        })
    }

    // static createUser(firstname, lastname, email, username, user_password) {

    //     const salt = bcrypt.genSaltSync(saltRounds);
    //     const hash = bcrypt.hashSync(user_password, salt);

    //     return db.one(
    //     `insert into users (firstname, lastname, email, username, user_password) 
    //     values($1, $2, $3, $4, $5) returning id, firstname, lastname, email, username, user_password`, 
    //     [firstname, lastname, email, username, hash])
    //         .then(result => {
    //             console.log(result)
    //             const newUser = new User(result.id, firstname, lastname, email, username, user_password);
    //             return newUser;
    //         })
    // }

}

module.exports = User;