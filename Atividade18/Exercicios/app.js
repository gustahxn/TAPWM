let express  = require('express');
let app = express(); //executando o express

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.send("<html><body>Site da Fatec Sorocaba</body></html>"); //sem ejs, utilizando send
});

app.get('/historia', function(req,res) {
    res.render("secao/historia"); //com ejs, utilizando render e puxando de dentro de views
});

app.get('/cursos', function(req,res) {
    res.render("secao/cursos"); //com ejs, utilizando render e puxando de dentro de views
});-

app.get('/professores', function(req,res) {
    res.render("secao/professores*"); //com ejs, utilizando render e puxando de dentro de views
});-


app.listen(3000, function() {
    console.log("olá, o servidor express foi carregado com sucesso");
});