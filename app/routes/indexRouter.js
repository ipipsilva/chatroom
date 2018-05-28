module.exports = function(application){
    
    application.get('/', function(req, res){
        try {
            console.log(JSON.stringify(application))
            application.app.controllers.indexController.home(application, req, res);
        } catch (error) {
            console.log(error);
        }
    });
}