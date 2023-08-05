var express = require("express");
const { listen } = require("socket.io");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

user = [];
connections = [];
server.listen(3000);
app.get("/", function (req, resp) {

    resp.sendFile(_dirname + "/chat.html");
})

io.sockets.on("connection", function (socket) {

    connection.push(socket);
    console.log("connected: %s socket connected", connections.length);
    socket.on("disconnect", function (data) {
        connections.splice(connection.indexOf(socket), 1);
        console.log("disconnected : %s socket connected", connections.length);

    });

   socket.on("send massage", function (data) {
    console.log(data);
    io.socket.emit("new message", { msg: data});
   });
});

console.log('server is listening');