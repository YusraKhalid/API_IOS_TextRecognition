module.exports = (app) => {
    let todoList = require('../controllers/controllers');
    // our Routes
    app.route('/login')
        .post(todoList.checkLogin) 
        //.post(todoList.createTask);
    
    app.route('/upload')
        //.get(todoList.readTask)
        .post(todoList.createTask)
        //.put(todoList.updateTask);
        //.delete(todoList.deleteTask);

    app.route('/report')
        .get(todoList.getReport) 
        //.post(todoList.createTask);
}