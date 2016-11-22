import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

const app = new Express();
const server = new Server(app);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'views')));
app.use('/js', Express.static(path.join(__dirname, 'static', 'js')))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port,  err => {
  if(err){return console.error(err);}

  console.info(`Server now running on port ${port}`)
})
