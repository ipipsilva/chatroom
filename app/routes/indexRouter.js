module.exports = function(application){
    
    application.get('/', function(req, res){
        console.log('Oi');
        console.log(req);
        try {
            application.app.controllers.indexController.home(application, req, res);
        } catch (error) {
            console.log(error);
        }
    });
}