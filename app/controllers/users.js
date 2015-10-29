module.exports = function(app){
  var User = app.models.User;
  var controller = {};

  controller.getUser = function(req,res){
    var login = req.params.login;

    User.find({'login':login},{'_id':0,'__v':0}).exec().then(function(user){
      if (!user){
        throw new Error('User não encontrado');
      }
      console.log(user);
      res.json(user);
    },function(erro){
      res.status(404).json('Not found.');
    });
  };

  return controller;
};
