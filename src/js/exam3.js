var app3 = angular.module('app3', []);

app3.controller('ctrl3', function($scope){


  $scope.getList = function() {
   return $scope.showList ? "ulshoppingList.html" : "olshoppingList.html"
   };

  $scope.groceriers = [
    {item: 'tomoatoes', purchased: false},
    {item: 'potatoes', purchased: false},
    {item: 'bread', purchased: false},
    {item: 'hummous', purchased: false}
  ];

    $scope.updatePurchased = function(index) {
      if(!$scope.groceriers[index].purchased){
        $scope.groceriers[index].purchased = true;
      }
      else {
        $scope.groceriers[index].purchased = false;
      }
    }



});
