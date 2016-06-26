var Backbone = require('backbone');

var Router = require('./router');
var MainView = require('/mainview');

Backbone.$ = $;

var Application = function() {
  this.initialize();
};

Application.prototype.initialize = function() {
  this.routers = new Router({
    app: this
  });
  
  this.mainView = new MainView({
    el: $('#app'),
    router: this.router
  });
  
  this.mainView.render();
  
  Backbone.history.start({ pushState: true });
};

module.exports = Application;
