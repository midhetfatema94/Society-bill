var passport = require('passport');
var Account = require('./schema');

module.exports = function (params) {

  var appObject = params.appObject;

  appObject.get('/', function (req, res) {
    if(req.user!==undefined){
      res.json({ user : req.user });
      console.log({ user : req.user });
    }
    else{
      res.json({ user : req.user});
      console.log(({ user : req.user}));
    }
  });

  appObject.get('/register', function(req, res) {
      res.json({ });
  });

  appObject.post('/register', function(req, res) {
      Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
          if (err) {
            res.json({info: "Sorry. That username already exists. Try again."});
            console.log({info: "Sorry. That username already exists. Try again."});            
          }

          passport.authenticate('local')(req, res, function () {
            console.log('User created');
            res.send('User created');
            // res.redirect('/');
          });
      });
  });

  appObject.get('/login', function(req, res) {
      console.log({ user : req.user });
      res.json({ user : req.user });

  });

  appObject.post('/login', passport.authenticate('local'), function(req, res) {
      console.log(req.body.username+' logged in');
      res.send(req.user.username+' logged in');
      // res.redirect('/');
  });

  appObject.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  appObject.get('/ping', function(req, res){
      res.send("pong!", 200);
  });

  return appObject;
  
};
