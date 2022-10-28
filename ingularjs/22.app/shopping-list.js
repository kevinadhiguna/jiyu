const myShoppingList = angular.module("myShoppingList", []);
myShoppingList.controller("myShoppingListController", function ($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];

  // Adding items
  $scope.addItem = function () {
    $scope.errortext = "";

    if (!$scope.addedProduct) { return; }

    if ($scope.products.indexOf($scope.addedProduct) == -1) {
      $scope.products.push($scope.addedProduct);
    } else {
      $scope.errortext = "The item is already in your shopping list !";
    }
  }
});
