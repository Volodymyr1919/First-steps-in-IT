const http = require('http');
http.createServer((req, res) => 
{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.writeHead(200, {'Contetnt-Type' : 'text/html'});
    res.end('index.html');
}).listen(3000, 'localhost', () => console.log('working'));
// берём Express
// var express = require('express');

// // создаём Express-приложение
// var app = express();

// // создаём маршрут для главной страницы
// // http://localhost:8080/
// app.get('/', function(req, res) {
//   res.sendFile('index.html');
// });

// // запускаем сервер на порту 8080
// app.listen(8080);
// // отправляем сообщение
// console.log('Сервер стартовал!');