
var EventEmitter = require('events').EventEmitter,
pub = new EventEmitter()

pub
.on('myevent', function (message){
    console.log(message)
})

.once('myevent', function (message){
    console.log('Se emite la primera vez:' + message)
})

pub.emit('myevent', 'quiero un monster')
pub.emit('myevent', 'Volviendo a emitir')
pub.removeAllListeners('myevent')
pub.emit('myevent', 'y un cigarro')
