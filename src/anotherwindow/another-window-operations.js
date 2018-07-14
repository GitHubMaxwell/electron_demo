const User = require('./src/models/user.js');// fake

function foo(arg) {
  //do sync
}

function bar(arg) {
  //do async
}

function baz(arg) {
  //do this async user schema make thing 
  let user = new User(arg);

}

module.exports = {foo, bar, baz};

