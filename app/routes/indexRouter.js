module.exports = function(application){
    
    application.get('/', function(req, res){
        application.controllers.indexController.home(application, req, res);
    });
}