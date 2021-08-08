// Note: we have 2 different variables - validate and validator. When you run the code, no error should occur.

//json will check if they have the thing, will validate
var validator = require('validator');

//import validator from mysql-query-validator
var  validate = require('mysql-query-validator');

module.exports.validateEmail = function(req,res, next){ //anonymous middleware, module is built-in
    if (req.body.email != null){
        if (!validator.isEmail(req.body.email)){
            res.status(400).send({message:'Invalid Input'})
            return; //always have this
        }
    }
    next(); //middleware
};

// validating input time
// for user table
try {
    validate(`
    CREATE TABLE user (
        user_id int NOT NULL AUTO_INCREMENT,
        fullname varchar(255) NOT NULL,
        email varchar(100) NOT NULL,
        user_password varchar(255),
        role_id int NOT NULL,
        PRIMARY KEY (user_Id),
        UNIQUE (email)
   )AUTO_INCREMENT=100;   
   
    `)
  } catch (err) {
    console.error(err.message) // syntax error at position N near 'url'
  }

// for role table
try {
    validate(`
    CREATE TABLE role(
        role_id int NOT NULL AUTO_INCREMENT,
        role_name varchar(255) NOT NULL,
        PRIMARY KEY (role_id),
        UNIQUE(role_name)
   )AUTO_INCREMENT=1;   
    `)
  } catch (err) {
    console.error(err.message) // syntax error at position N near 'url'
  }

// for file table
try {
    validate(`
    CREATE TABLE file (
        file_id int NOT NULL AUTO_INCREMENT,
        cloudinary_file_id varchar(255) NOT NULL,
        cloudinary_url varchar(255) NOT NULL,
        design_title varchar(2000) NOT NULL,
        design_description varchar(2000) NOT NULL,
        created_by_id int,
        PRIMARY KEY (file_id)
   )AUTO_INCREMENT=100;    
    `)
  } catch (err) {
    console.error(err.message) // syntax error at position N near 'url'
  }
