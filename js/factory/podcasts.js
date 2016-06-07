app.factory('podcasts', function($http){
  return {
    list: function(callback){
      $http.get('./podcasts.json?'+Date.now()).success(callback);
    }
  };
});