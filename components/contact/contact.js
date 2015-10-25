app.controller('contactController', function($scope, $http) {
  $scope.formData = {};
  $scope.processForm = function() {
    console.log($scope.formData);
    $http({
      url: '//formspree.io/loyless.sean@gmail.com',
      method: 'POST',
      data: $scope.formData,
      dataType: 'application/json'
    });
    return false;
  };
  $scope.reset = function() {
    return $scope.user = angular.copy($scope.formData);
  };
  $scope.reset();
  return false;
});

//# sourceMappingURL=contact.js.map
