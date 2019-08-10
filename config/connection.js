// REQUIRED PACKAGES 
var mysql = require ("mysql"); 
var express = require("express"); 

// INITIALIZING APP VAR TO USE EXPRESS 
var app = express(); 

// DECLARING PORT 
var PORT = process.env.PORT || 3000; 

// DATABASE CONNECTION
// connection var
var connection ; 

if (process.env.JAWSDB_URL) { 
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else { 
    connection = mysql.createConnection({
        host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", 
        port: 3306, 
        user: "jk3c1hm7idia7se0", 
        password: "zwdn82d7ffkzbfeo", 
        database: "burger_db"
    })
}
connection.connect (function (err) {
    if (err) {
        console.log("Connection error: " + err.stack);
        return; 
    }
    console.log ("Connected as id + " + connection.threadId); 
})


module.exports = connection; 