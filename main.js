// const ipc = require('ipc');
const {app, BrowserWindow, ipcMain} = require('electron');
// const quizOperations = require('./src/quiz/quiz-operations.js');
// const rosterOperations = require('./src/roster/roster-operations.js');
const AWO = require('./src/anotherwindow/another-window-operations.js');



//mangage all windows in the main.js
// best practice to wrap everything in the app.on('ready', )

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function mainWindow () {
  win = new BrowserWindow({
    frame: false,
    width: 900, 
    height: 600,
  });
  win.loadFile('./src/public/main.html');
  //  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
}

function anotherWindow () {
  win = new BrowserWindow({
    width: 900, 
    height: 600,
    // show: false,
  });
  win.loadFile('./src/anotherwindow/another-window.html');
}

function quizWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 900, 
    height: 600,
    // show: false,
  });
  // win.webContents.openDevTools();
  win.loadFile('./src/quiz/quiz-window.html');
  //  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
}
  
app.on('ready', anotherWindow);


/* as in module.exports ?

exports.openFileDialog = browserWindow => {
    dialog.showOpenDialogue
}
*/

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
  
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    // mainWindow();
    anotherWindow();
  }
});

ipcMain.on('asynchronous-message', (event, arg) => {
  let aWOps = AWO;
  aWOps(arg); // should print 'ping'
  // console.log(arg); // prints "ping"
  event.sender.send('asynchronous-reply', 'pong');
});
  
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg); // prints "ping"
//   event.returnValue = 'pong';
// });