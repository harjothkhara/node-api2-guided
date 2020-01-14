const express = require('express');

const hubsRouter = require('../hubs/hubs-router'); // importing the router file
const usersRouter = require('../users/users-router'); // importing users router file

const server = express(); // server instance

server.use(express.json()); // teach the whole server to parse JSON

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// requests to routes that begin with /api/hubs
server.use('/api/hubs', hubsRouter);
server.use('/api/users', usersRouter);

module.exports = server;

// create file for the Router
// write code to create a router: require('express).Router()
// export it
//require and use the router on server.js: server.use('/api/hubs, hubsRouter)
