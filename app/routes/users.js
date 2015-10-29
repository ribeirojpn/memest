module.exports = function(app){
  var controller = app.controllers.users;

  app.route('/api/user/:login')
    .get(controller.getUser);
  app.route('/api/user/:login/images')
    .get(controller.getUserImages);

};
