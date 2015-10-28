module.exports = function(app){
  var Image = app.models.Image;
  var controller = {};

  controller.getImages = function(req,res){
    Image.find().sort({date: 'descending'}).exec().then(function(images){
      res.json(images);
    },function(erro){
      res.status(500).json(erro);
    });
  };

  controller.addImage = function(req,res){
    var Img = req.body;
    Img.author = req.user._id;

    Image.create(Img).then(function(image){
      res.status(201).json(image);
    },function(erro) {
      res.status(500).json(erro);
    });
  };

  controller.getImage = function(req,res){
    var id = req.params.id;

    Image.findById(id).populate('author','pins').exec(function(image){
      res.json(image);
    },function(erro){
      res.status(404).json('Not found.');
    });
  };

  controller.deleteImage = function(req,res){
    var id = req.params.id;

    Image.findByIdAndRemove(id).exec().then(
      function() {
        res.status(204).end();
      }, function(erro) {
        res.status(500).json(erro);
      }
    );
  };

  return controller;
};
