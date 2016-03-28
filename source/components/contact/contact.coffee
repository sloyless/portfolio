app.controller 'contactController', ['$scope', '$http', ($scope, $http) ->
  $scope.formData = {}
  
  $scope.processForm = ->
    $http({
      method: 'POST',
      url: 'components/contact/formprocess.php?action=formData',
      data: $.param($scope.formData),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success (data) ->
      console.log(data)
      $scope.message = data.message
      false
    false
  
  $scope.reset = ->
    $scope.formData = angular.copy($scope.formData)
    false

  do $scope.reset
  false
]