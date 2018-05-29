var app = require('./config/server');
var consign = require('consign');

consign({cwd: 'app'})
    .include('routes')
    .then('controllers')
    .into(app);

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Server do chatroom ON.');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* Criar a conexão com o websocket */
io.on('connection', function(socket){
    console.log('Usuario conectou!');

    // listener disparado quando o cliente se desconecta
    socket.on('disconnect', function(){
        console.log('Usuário desconectou!');
    });

    // Listener que espera as mensagens enviadas pelos clientes
    socket.on('msgParaServidor', function(data) {

        /* Ações de diálogos */

        // Emite mensagem para o próprio cliente 
        socket.emit('msgParaCliente', {'apelido': data.apelido, 'mensagem': data.mensagem} );

        // Emite mensagem para todos os clientes, menos o cliente que emitiu a mensagem
        socket.broadcast.emit('msgParaCliente', {'apelido': data.apelido, 'mensagem': data.mensagem} );

        /* Ações de participantes */
        if(parseInt(data.apelido_atualizado_cliente) == 0){
            socket.emit('participantesParaCliente', {'apelido': data.apelido, 'apelido_atualizado_cliente': 1});
            socket.broadcast.emit('participantesParaCliente', {'apelido': data.apelido, 'apelido_atualizado_cliente': 1});
        }
    });
});