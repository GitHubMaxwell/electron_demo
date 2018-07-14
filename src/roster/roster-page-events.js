'use strict';
const {ipcRenderer} = require('electron');

document.getElementById('roster').addEventListener('click', event => {
  ipcRenderer.send('asynchronous-message', 'ping');
  //can get send to ask main to do stuff
});
  
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
});

