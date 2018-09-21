var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope){
  $scope.blur = 0;

  $scope.disableButton = true;

  $scope.helloWorld = function(){
    console.log("Hello World");
  }

  $scope.dayTimeButton = true;

  $scope.capitals = [{city: 'Montgomery', state: 'Alabama'}, {city: 'Juneau', state: 'Alaska'}, {city: 'Phoenix', state: 'Arizona'}]
  


})
