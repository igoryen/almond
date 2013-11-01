angular.module('components', []).
  directive('tabs', function() { // 1, 2
    return {
      restrict: 'E', // 3
      transclude: true, // 4
      scope: {}, // 5
      controller: function($scope, $element) { // 6, 7, 8
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) { // 9
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) { // 10
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template: // 11
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+ // 12
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' + // 13
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' + // 14
        '</div>',
      replace: true // 15
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs', // 16
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) { // 17
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })