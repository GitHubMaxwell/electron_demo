'use strict';
const {ipcRenderer} = require('electron');

document.getElementById('quiz').addEventListener('click', event => {
  ipcRenderer.send('asynchronous-message', 'ping');
});
  
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
  
  // put stuff like the below github auth
});

