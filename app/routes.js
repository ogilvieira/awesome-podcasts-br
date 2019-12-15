app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'app/views/list.html',
      controller : 'ListController'
    })
    .when('/podcast/:podcastSlug', {
      templateUrl : 'app/views/get.html',
      controller : 'GetController'
    })
    .otherwise ({ redirectTo: '/' });
}]);
