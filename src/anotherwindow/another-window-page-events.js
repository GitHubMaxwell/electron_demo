'use strict';
const {ipcRenderer} = require('electron');
// const remote = require('remote');

//in this case i think i have to use the remote to get access to the app object from the main.js file
// app.on('click', () => {
//   ipc.send('show-prefs');
// });

//is it document or window because of electron
document.getElementById('main').addEventListener('click', event => {
  ipcRenderer.send('asynchronous-message', 'ping');
  //put the ipc stuff in here?
  // console.log(event);
});

// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
  
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
  /*
  put stuff like the below github auth

import superagent from 'superagent';
import User from '../model';
const authorize = (req) => {

  //wire up all the superagent calls now
  ///oauth?code=37f4dc314318cecadbe5&state=autumn

  let code = req.query.code;

  //have the code so we want to exchange it for a token

  //i dont know what this has to be sent as / google requires it to be a form
  return superagent.get('https://github.com/login/oauth/access_token')
    .send({
      client_id:process.env.GITHUB_CLIENT_ID,
      client_secret:process.env.GITHUB_CLIENT_SECRET,
      code:code,
      redirect_uri:process.env.API_URL + '/oauth',
      state:process.env.SECRET,
    })
    .then( response => {
      //by default the access token takes the follwing form
      //access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

      let gitHubToken = response.body.access_token;
      console.log('(2) got a token from Github response body', response.body);

      console.log('(2) got a token from Github', gitHubToken);
      return gitHubToken;
    })
    .then(token => {
      //we got a token now we have to get the user out of it
      console.log('TOKEN:',token);
      return superagent.get(`https://api.github.com/user?access_token=${token}`)

      // in get hub you send the token on the URL directly rather than setting it like in Google
        // .set('Authorization', `Bearer ${token}`)

        .then( response => {
          let user = response.body;
          console.log('(3) Got User info');
          return user;
        });
    })
    .then( user => {
      //so at this point with our user info we need to create an account
      return User.createFromOAuth(user);

      // after testing though we need to go to our db and delete the account to start fresh
      // db.users.remove({})
      // db.users.find().pretty()
      // console.log('STOP');
    })
    .then( loggedInUser => {
      return loggedInUser.generateToken();
    })
    .catch(error => error);
};
export default {authorize};
  */
});

