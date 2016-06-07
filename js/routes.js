app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'views/list.html',
      controller : 'ListController'
    })
    .when('/podcast/:podcastSlug', {
      templateUrl : 'views/get.html',
      controller : 'GetController'
    })
    .otherwise ({ redirectTo: '/' });
}]);