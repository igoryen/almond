//beers.js
function BeerCounter($scope, $locale) { // 1
  $scope.beers = [0, 1, 2, 3, 4, 5, 6]; // 2
  if ($locale.id == 'en-us') {   // 3
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
}