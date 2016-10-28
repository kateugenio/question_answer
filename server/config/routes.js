var Question = require('../controllers/questions');
var Answer = require('../controllers/answers');
var User = require('../controllers/users');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/questions', Question.index);
  app.post('/questions', Question.create);
  app.get('/questions/:id', Question.show);
  app.post('/answers/:qid/:user', Answer.create);
  app.put('/answers/:id', Answer.update);
  app.post('/users', User.create);
  app.get('/users', User.show);
  app.delete('/users/:id', User.delete);
}
