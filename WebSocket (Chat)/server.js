const express = require('express'); //npm i express
const http = require('http');
const WebSocket = require('ws'); //npm i ws

const server = http.createServer(express);
const wss = new WebSocket.Server({server});

const app = express();
const port = 6969;

//SET UP STATIC FILES (assets, css, scripts)
app.use(express.static('public'));

//SET UP EJS AS VIEW FOR EXPRESS
app.set('view engine', 'ejs');

//HOME PAGE
app.get('/', (req, res) => {

    res.render('index');

});


wss.on('connection', function connection(ws){
    ws.on('message', function incoming(data){
        wss.clients.forEach(client => {
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(data);
            }
        });
    });
})

app.listen(3000, function(){
    console.log(`App listening at port 3000`);
})

server.listen(port, function(){
    console.log(`Chat listening at port ${port}`);
})
