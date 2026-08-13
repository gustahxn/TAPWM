const fs = require('fs'); // carregando modulo filesystem
const data = fs.readFileSync('file.txt');
// a execucao eh bloqueada aque ate o arquivo ser lido
console.log(data.toString());