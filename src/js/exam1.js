var app1 = angular.module('app1',[]);

//a factory function. An example of dependancy injection, angular will automatically inject the scop into the function whenever it is called
app1.controller('ctrl1', function($scope) {
  //initial value
  $scope.first = 1;
  $scope.second = 1;

  $scope.updateValue = function() {
    $scope.calculation = $scope.first + '+' + $scope.second + '=' +
    (+$scope.first + +$scope.second);
  };
});
