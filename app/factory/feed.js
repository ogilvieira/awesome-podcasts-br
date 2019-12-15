app.factory('feed', ['$http', function($http){
  return {
    list: function(url, callback){
      $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q='+encodeURIComponent(url),{
      }).success(function(data){
        callback(data);
      }).error(function(){
        callback(false);
      });
    }
  };
}]);
