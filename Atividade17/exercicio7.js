let http = require('http');
let server = http.createServer(function(req, res) {
let opcao = req.url; // pegando a url da requisição
if (opcao =='/historia') {
    res.end("<html><body>História Fatec Sorocaba</body></html>");
}

else if (opcao =='/cursos') {
    res.end("<html><body>Cursos</body></html>");
}
else if (opcao =='/professores') {
    res.end("<html><body>Professores</body></html>");
}

else 
res.end("<html><body>Site Fatec Sorocaba</body></html>");
});

server.listen(3000);
console.log('servidor on');
