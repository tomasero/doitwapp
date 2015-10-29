var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var accountSid = 'ACf3e2774672baa3f68d9b80591c6667df'; 
var authToken = '1b9d6ce872a880a96e6c4293c52606fc'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

var numbers = {
    doron: '+19493728307',
    pierre: '+14012860897',
    ali: '+15106846919',
    pierluigi: '+16619930685',
    tomas: '+15107104699'

}

function sendMessage( to, message  ) {
  client.messages.create({ 
      to: numbers[to.toLowerCase()], 
      from: '+15109008110',
      body: message,    
     }, function(err, message) { 
      console.log(message.sid); 
     }
  );
}


router.post('/sendMessage', function (req, res) {
  console.log('sendMessage AJAX');
  var person = req.body.person;
  var message = req.body.message;
  console.log( person + message );
  sendMessage( person, message, function ( err, msg  ) {
    console.log(err);
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({
        message: 'Tap successful!'
      });
    }
  });
});

module.exports = router;
