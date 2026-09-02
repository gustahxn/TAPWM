let app = require('./app/config/server') //carregando o modulo do servidor

let rotaHome = require('./app/routes/home'); //definindo as rotas
rotaHome(app); //executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); //definindo as rotas
rotaAdicionarUsuario(app); //executando

let rotaCursos = require('./app/routes/cursos'); //definindo as rotas
rotaCursos(app); //executando

let rotaProfessores = require('./app/routes/professores'); //definindo as rotas
rotaProfessores(app); //executando

let rotaHistoria = require('./app/routes/historia'); //definindo as rotas
rotaHistoria(app); //executando

app.listen(3000, function() {
    console.log("server iniciado");
});