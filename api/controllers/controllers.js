const mongoose = require("mongoose");
//const Task = mongoose.model("Tasks");
// get all tasks

let tableName = "MyTable";

exports.checkLogin = (req, res) => {
    console.log(req.body.username);
    
    "SELECT CASE WHEN EXISTS (" +
        "SELECT * " +
        "FROM " + tableName +
        "WHERE 'userName column' = req.userName and 'password column' = req.password)" + //change required
    "THEN CAST(1 AS BIT)" +
    "ELSE CAST(0 AS BIT) END"
    res.json( {"result": "0" });
    console.log(res.body)
    };



// create a task
exports.createTask = (req, res) => {
    console.log("Received")
    "Insert into " + tableName +
    "Values(value1, value2,.........)" //Change required
    console.log(req.body)
};
// read a single task 
exports.getReport = (req, res) => {
        console.log("report requested")
        "select avg(price)" +
        "from (databaseName)" + //change required
        "groupby competitor, siteName;"
        res.json( { "result": false } );
    };
