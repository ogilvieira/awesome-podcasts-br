app.controller("GetController", ['$scope', 'podcasts', 'feed', '$routeParams', 'ngMeta',
  function($scope, podcasts, feed, $routeParams, ngMeta){

  $scope.feedloaded = false;
  $scope.podcasts = false;
  $scope.feedlist = [];
  $scope.getTime = function(mydate){
    var d = new Date(mydate);
    return d.getTime();
  };

  $scope.getEpisodes = function(urlRss){
    feed.list(urlRss, function(res){
      $scope.feedlist = res.responseData.feed.entries.slice(0, 9);
      $scope.feedloaded = true;
    });
  };

  podcasts.get($routeParams.podcastSlug, function(res){
    $scope.podcast = res;
    ngMeta.setTitle($scope.podcast.name);
    if(res.rss_link){ 
      $scope.feedloaded = false; 
      $scope.getEpisodes(res.rss_link);
    } else { 
      $scope.feedloaded = true; 
    }
  });
}]);
