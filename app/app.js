var app = angular.module("APBR", ["slugifier","ngRoute","checklist-model", "ngSanitize", "ngMeta"]);

app.run(['ngMeta', function(ngMeta) {
  ngMeta.init();
}]);

app.config(['ngMetaProvider', function(ngMetaProvider) {
  ngMetaProvider.useTitleSuffix(true);
  ngMetaProvider.setDefaultTitle('Lista de Podcasts');
  ngMetaProvider.setDefaultTitleSuffix(' - Awesome Podcasts BR');
}]);
