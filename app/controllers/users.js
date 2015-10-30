module.exports = function(app){
  var User = app.models.User;
  var Image = app.models.Image;
  var controller = {};

  controller.getUser = function(req,res){
    var login = req.params.login;

    User.findOne({'login':login},{'_id':0,'__v':0}).exec().then(function(user){
      if (!user){
        throw new Error('User não encontrado');
      }
      res.json(user);
    },function(erro){
      res.status(404).json('Not found.');
    });
  };

  controller.getUserImages = function(req,res) {
    var login = req.params.login;
    User.findOne({'login':login}).exec().then(function(user){
      if (!user){
        throw new Error('User não encontrado');
      }
      Image.find({'author':user._id},{'_id':0,'__v':0}).populate('author').sort({date: 'descending'}).exec().then(function(images){
        if (!images){
          throw new Error('User não encontrado');
        }
        res.json(images);
      },function(erro){
        res.status(404).json('Not found.');
      });
    },function(erro){
      res.status(404).json('Not found.');
    });
  }

  controller.getUsr = function(req,res){
    var login = req.user.login;

    User.findOne({'login':login},{'_id':0,'__v':0}).exec().then(function(user){
      if (!user){
        throw new Error('User não encontrado');
      }
      res.json(user);
    },function(erro){
      res.status(404).json('Not found.');
    });
  };

  controller.getUsrImages = function(req,res) {
    var login = req.user.login;
    User.findOne({'login':login}).exec().then(function(user){
      if (!user){
        throw new Error('User não encontrado');
      }
      Image.find({'author':user._id},{'__v':0}).populate('author').sort({date: 'descending'}).exec().then(function(images){
        if (!images){
          throw new Error('User não encontrado');
        }
        res.json(images);
      },function(erro){
        res.status(404).json('Not found.');
      });
    },function(erro){
      res.status(404).json('Not found.');
    });
  }

  return controller;
};
