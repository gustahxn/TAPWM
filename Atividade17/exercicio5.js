let eventos = require('events');
let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();

//método on semelhante ao addListener do frontn
ee.on('dados', function(fecha) {
    console.log(fecha);
});

//ativando uma vez só
ee.emit('dados', 'primeira vez ' + Date.now());

//ativando a cada 500ms
setInterval (function() {
    ee.emit('dados', +Date.now());
}, 500);
