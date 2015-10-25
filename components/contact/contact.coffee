app.controller 'contactController', ($scope, $http) ->
  $scope.formData = {}
  
  $scope.processForm = ->
    console.log($scope.formData)
    $http({
      url: '//formspree.io/loyless.sean@gmail.com',
      method: 'POST',
      data: $scope.formData,
      dataType: 'application/json'
    })
    false
  
  $scope.reset = ->
    $scope.user = angular.copy($scope.formData)

  do $scope.reset
  false