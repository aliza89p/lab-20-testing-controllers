'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('PlayerController', ['$scope', function($scope){
  $scope.playerCtrl = {};
  $scope.playerCtrl.isDone = false;
  $scope.playerCtrl.classes = ['wizard', 'slug', 'dragon', 'muppet'];

  $scope.playerCtrl.createPlayer = function(player) {
    $scope.playerCtrl.player = player;
    $scope.playerCtrl.isDone = true;
  };
}]);
