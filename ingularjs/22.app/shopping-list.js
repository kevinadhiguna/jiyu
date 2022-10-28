const myShoppingList = angular.module("myShoppingList", []);
myShoppingList.controller("myShoppingListController", function ($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
});
