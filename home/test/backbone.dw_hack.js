/*
修改了Backbone的路由，增加了一个next属性。
add the next for route.
scene :
action 1
Router.route('*path',{next:true},function(){
  require(['nav'],function(navView){
    navView.render();
  })
})
action 2
Router.route('app(/:id)(/*path)',{next:true},function(id){
  require(['menu'],function(menuView){
    menuView.model.set('eq',id);
    menuView.render();
  })
})
action 3
Router.route('app/over',function(){
  require(['min'],function(minView){
    minView.render();
  })
})

the url  "app/over" will trigger three actions;
2015/10/29 by hezedu
*/

define(['Backbone'], function(Backbone){
  B.Router.prototype.route = function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      var next = false;

      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }else if(typeof name === 'object'){
        next = name.next;
        name = name.name || '';
      }

      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, next, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    }

    Backbone.history.route = function(route,next,callback) { //unshift is a jok ?
      this.handlers.push({route: route, next:next, callback: callback});
    }

    Backbone.history.loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      
      var _bool;
      for(var i = 0,len = this.handlers.length; i < len; i++){
        var handler = this.handlers[i];
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          _bool = true;
          if(!handler.next){
            return true;
          }
        }
      }
      return _bool;
    }

})