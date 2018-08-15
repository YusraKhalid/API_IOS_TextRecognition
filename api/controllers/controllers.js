const mongoose = require("mongoose");
//const Task = mongoose.model("Tasks");
// get all tasks
exports.checkLogin = (req, res) => {
    SELECT CASE WHEN EXISTS (
        SELECT *
        FROM [User]
        WHERE "userName column" = userName and "password column" = password
    )
    THEN CAST(1 AS BIT)
    ELSE CAST(0 AS BIT) END
    };

  /*  
    user.findByName({userName}, (err, password) => {
        if (err)
            res.send(err);
        
        res.json(password);
    });
*/

};
// create a task
exports.createTask = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save( (err, task) => {
        if (err)
            res.send(err);
        
        res.json(task);
    });
};
// read a single task 
exports.getReport = (req, res) => {
    Task.find({}, (err, task) => {
        if (err)
            res.send(err);
        select avg(price)
        from "databaseName"
        groupby competitor, siteName;
        res.json(task);
    });
};
// update a particular task 
/*exports.updateTask = (req, res) => {
  Task.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, task) => {
    if (err) 
        res.send(err);
    res.json(task);
  });
};
// delete a single task 
exports.deleteTask = (req, res) => {
    Task.remove({
        _id: req.params.id
    }, (err, task) => {
        if (err)
            res.send(err);
        res.json({ message: 'Task deleted!!' });
    });
}; */