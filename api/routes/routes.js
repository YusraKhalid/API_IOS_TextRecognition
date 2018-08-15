module.exports = (app) => {
    let todoList = require('../controllers/ontrollers');
    // our Routes
    app.route('/login/:userName')
        .get(todoList.checkLogin) 
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