module.exports = function(app){
  var controller = app.controllers.users;

  app.route('/api/user/:login')
    .get(controller.getUser);
};
