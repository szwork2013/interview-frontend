app.controller('listCandidatesCtrl', ['$scope', '$stateParams', 'Position', '$rootScope', function($scope, $stateParams, Position, $rootScope) {
  var positionId = $stateParams.positionId;

  //Call method below when API is setup.
  //getPosition();

  $scope.position = {
    title : 'Web Engineer'
  };

  $scope.candidates = [{
      firstName : 'John',
      lastName : 'Doe',
      phoneNumber : 2121234567,
      email : 'john@doe.com',
      comments : 'Example Comments',
      interviewLink : 'http://www.google.com/johndoe',
      interviewsConducted : 2,
      averageRating : 8.7
    },
    {
      firstName : 'Jane',
      lastName : 'Doe',
      phoneNumber : 2121234567,
      email : 'jane@doe.com',
      comments : 'Example Comments',
      interviewLink : 'http://www.google.com/janedoe',
      interviewsConducted : 4,
      averageRating : 9.8
    }];

  /**
   * getPosition Get position
   * @return void
   */
  function getPosition(){
    $rootScope.isLoading = true;
    Position.get({ positionId : positionId })
    .$promise
    .then(function(res){
      console.log(res);
      $scope.position = res.data;
    }, function(err){
      console.log(err);
    }).finally(function(){
      $rootScope.isLoading = false;
    })
  }

}]);