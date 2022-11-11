const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:7071/api/")
    .build();

connection.on("newMessage", data => {
    console.log(data);
});

connection.start();