module.exports = function(app){
    
    app.get('/', function(req, res){
        try {
            console.log(JSON.stringify(app));
            app.app.controllers.indexController.home(app, req, res);
        } catch (error) {
            console.log(error);
        }
    });
}