const w3CssApp = angular.module("w3CssApp", []);
w3CssApp.controller("w3CssAppController", function ($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.password1 = "";
  $scope.password2 = "";
  
  $scope.users = [
    { id: 1, firstName: "Yordan", lastName: "Alvarez" },
    { id: 2, firstName: "Clayton", lastName: "Kershaw" },
    { id: 3, firstName: "Austin", lastName: "Riley" },
    { id: 4, firstName: "Bryce", lastName: "Harper" },
    { id: 5, firstName: "Nolan", lastName: "Arenado" },
    { id: 6, firstName: "Shane", lastName: "Bieber" },
  ];

  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideForm = true;

  // Sets model variables
  $scope.editUser = function (userId) {
    $scope.hideForm = false; // Set to false when user clicks on 'Edit' or 'Create user'.

    if (userId == 'new') {
      $scope.edit = true; // Set to true when user clicks on 'Create user' or 'Edit'.
      $scope.incomplete = true; // Set to true if any field is empty (length = 0)
      
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.password1 = "";
      $scope.password2 = "";
    } else {
      $scope.edit = false;
      $scope.firstName = $scope.users[userId - 1].firstName;
      $scope.lastName = $scope.users[userId - 1].lastName;
    }
  }

  // Tests model variables for errors and incompleteness
  $scope.test = function () {
    if ($scope.password1 !== $scope.password2) {
      $scope.error = true; // 	Set to true if password1 not equal password2
    } else {
      $scope.error = false;
    }

    $scope.incomplete = false;

    if ($scope.edit && (!$scope.firstName.length || !$scope.lastName.length || !$scope.password1.length || !$scope.password2.length)) {
      $scope.incomplete = true; // Set to true if any field is empty (length = 0)
    }
  }

  // Watches model variables
  $scope.$watch("password2", function () {
    $scope.test();
  });
  $scope.$watch("password1", function () {
    $scope.test();
  });
  $scope.$watch("firstName", function () {
    $scope.test();
  });
  $scope.$watch("lastName", function () {
    $scope.test();
  });
});
