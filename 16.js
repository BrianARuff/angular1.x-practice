const app = angular.module("app", []);

app.controller("people", ['$scope', '$http', function($scope, $http) {
  $scope.persons = [];
  $http({
    method: "GET",
    url: "./data.json"
  }).then(res => {
    $scope.persons = res.data.records;
  })
}])