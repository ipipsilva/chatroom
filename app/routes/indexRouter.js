module.exports = function(app){
    
    application.get('/', function(req, res){
        try {
            console.log(JSON.stringify(application));
            app.app.controllers.indexController.home(app, req, res);
        } catch (error) {
            console.log(error);
        }
    });
}