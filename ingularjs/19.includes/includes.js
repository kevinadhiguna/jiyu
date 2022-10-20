const ngIncludeApp = angular.module("ngIncludeApp", []);

ngIncludeApp.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    "https://jsonplaceholder.typicode.com/**",
  ]);
});

ngIncludeApp.controller("ngIncludeAppController", function ($scope, $http) {
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  
  $http({
    method: "GET",
    url: userUrl,
  }).then(function (res) {
    console.log("res.data : ", res.data);
    $scope.users = res.data;
    console.log("$scope.users : ", $scope.users);
  }).catch(function (err) {
    $scope.err = true;
    console.error("Something went wrong : ", err);
  });
});
