// Server-side code
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Client-side code
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('message', (message) => {
  console.log(`Received message: ${message}`);
});

socket.emit('message', 'Hello, server');