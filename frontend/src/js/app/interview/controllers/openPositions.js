app.controller('openPositionsCtrl', ['$scope', '$modal', function($scope, $modal) {
  
  $scope.slide = false;
  
  $scope.positions = [{
    id : 1,
    title : 'Executive Manager',
    candidateCount : 29,
    description : 'This is an example description',
    candidates : [{
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
    }]
  },
  {
    id : 2,
    title : 'Web Engineer',
    candidateCount : 12,
    description : 'To create websites and web applications using PHP/MYSQL technologies.',
    candidates : [{
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
    }]
  },
  {
    id : 3,
    title : 'Full Stack Developer',
    candidateCount : 12,
    description : 'To create websites and web applications using Full LAMP Stack technologies.',
    candidates : [{
      firstName : 'Jaime',
      lastName : 'B',
      phoneNumber : 6463231803,
      email : 'jaime@iamjaime.com',
      comments : 'Example Comments',
      interviewLink : 'http://www.google.com/jaimeB',
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
    }]
  }];

  /**
   * openCreateCandidate Opens the modal for creating a candidate.
   * @param  string  size      The modal size (sm, md, lg)
   * @param  object  position  The position object
   * @return void
   */
  $scope.openCreateCandidate = function (size, position) {
    var modalInstance = $modal.open({
      templateUrl: 'js/app/interview/views/createModals/add_candidate_modal.html',
      controller: 'createCandidateCtrl',
      size: size,
      resolve: {
          position: function () {
            return position;
          }
        }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };

  /**
   * openCreatePosition Opens the modal for creating a new position.
   * @param  string  size      The modal size (sm, md, lg)
   * @return void
   */
  $scope.openCreatePosition = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'js/app/interview/views/createModals/add_position_modal.html',
      controller: 'createPositionCtrl',
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };

  /**
   * openEditPosition Opens the modal for editing an existing position.
   * @param  string  size      The modal size (sm, md, lg)
   * @param  object  position  The position object
   * @return void
   */
  $scope.openEditPosition = function (size, position) {
    var modalInstance = $modal.open({
      templateUrl: 'js/app/interview/views/updateModals/update_position_modal.html',
      controller: 'updatePositionCtrl',
      size: size,
      resolve: {
          position: function () {
            return position;
          }
        }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };

  /**
   * openEditCandidate Opens the modal for editing an existing candidate.
   * @param  string  size      The modal size (sm, md, lg)
   * @return void
   */
  $scope.openEditCandidate = function (size, candidate) {
    var modalInstance = $modal.open({
      templateUrl: 'js/app/interview/views/updateModals/update_candidate_modal.html',
      controller: 'updateCandidateCtrl',
      size: size,
      resolve: {
          candidate: function () {
            return candidate;
          }
        }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };

}]);
app.controller('createCandidateCtrl', ['$scope', '$modalInstance', 'position', function($scope, $modalInstance, position) {
    
    $scope.position = position;

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

}]);
app.controller('createPositionCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

}]); 
app.controller('updatePositionCtrl', ['$scope', '$modalInstance', 'position', function($scope, $modalInstance, position) {
    $scope.position = position;

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

}]);
app.controller('updateCandidateCtrl', ['$scope', '$modalInstance', 'candidate', function($scope, $modalInstance, candidate) {
    $scope.candidate = candidate;

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

}]);