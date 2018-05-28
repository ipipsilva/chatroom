module.exports.iniciarChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('apelido','Um apelido deve ser informado.').notEmpty();
    req.assert('apelido','Apelido deve conter entre 3 e 15 caracteres.').len(3,15);

    var erro = req.validationErrors();

    if(erro){
        res.render('index', {erro: erro})
        return;
    }

    application.get('io').emit('msgParaCliente', {'apelido': dadosForm.apelido, 'mensagem':' acabou de entrar no chat!'});

    res.render('chat', {'dadosForm': dadosForm});
}