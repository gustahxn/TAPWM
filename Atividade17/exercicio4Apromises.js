function Parte1() {
    for (let i = 1; i <10; i++) {
        console.log("primeira parte: " + i);
    }
}

setTimeout(Parte1, 2000); // para atrasar
const fs = require('fs').promises; //importa a versao com promises
fs.readFile('file.txt', 'utf8') //o utf8 evita a necessidade de .toString()
.then(data => {
    const registros = data.split ('\n');
    registros.forEach((registro, index) => {
        console.log("segunda parte:" + index + " " + registro);
});
})
    .catch(error =>{
    console.error("Erro ao ler o arquivo:", error); //console error para erros
    })
    //promises representam o resultado eventual de uma operação assíncrona