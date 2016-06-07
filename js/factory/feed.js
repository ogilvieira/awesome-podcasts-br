app.factory('feed', function($http){
  return {
    list: function(callback){
      $http.get('http://loopmatinal.libsyn.com/rss?'+Date.now()).success(callback);
    }
  };
});