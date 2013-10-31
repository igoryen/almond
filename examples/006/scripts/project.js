var bag = "";

angular.module('project', ['firebase']). // 1, 2
  value('fbURL', 'https://angularjs-projects.firebaseio.com/'). // 21
  factory('Projects', function(angularFireCollection, fbURL) { // 31, 32
    return angularFireCollection(fbURL);
  }).
  config(function($routeProvider) { // 4
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}). // 5
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}). // 6
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}). // 61
      otherwise({redirectTo:'/'}); // 7
  });
 
function ListCtrl($scope, Projects) { // 71
  $scope.projects = Projects; // 8
}
 
function CreateCtrl($scope, $location, $timeout, Projects) { // 81, 9, 10
  $scope.save = function() {  // 11
    Projects.add($scope.project, function() {
      $timeout(function() { $location.path('/'); }); //12
    });
  }
}
 
function EditCtrl($scope, $location, $routeParams, angularFire, fbURL) { // 121, 13, 14
  angularFire(fbURL + $routeParams.projectId, $scope, 'remote', {}). // 15
  then(function() {
    $scope.project = angular.copy($scope.remote);
    $scope.project.$id = $routeParams.projectId;
    $scope.isClean = function() { // 16
      return angular.equals($scope.remote, $scope.project);
    }
    $scope.destroy = function() { // 17
      $scope.remote = null; // 18
      $location.path('/');
    };
    $scope.save = function() {
      $scope.remote = angular.copy($scope.project);
      $location.path('/');
    };
  });
}

document.getElementById("bag").innerHTML = bag;

