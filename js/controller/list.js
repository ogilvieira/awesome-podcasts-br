app.controller("ListController", ['$scope', 'podcasts', 'feed', function($scope, podcasts, feed){
  $scope.podcasts = {};

  podcasts.list(function(res){
    $scope.podcasts = res;
  });

  feed.list(function(res){
    console.log(res);
  });

}]);
