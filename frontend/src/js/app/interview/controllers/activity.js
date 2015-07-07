app.controller('listActivityCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.items = [{
        date : '07/06/2015',
        description : 'John Doe Has Been Hired.'
    },
    {
        date : '07/07/2015',
        description : 'Jane Doe has submitted an Interview Survey for Adam Johnson for the Web Engineer position.'
    },
    {
        date : '07/08/2015',
        description : 'The Web Engineer position has been created.'
    }];
    $scope.datasource = {
		get : function(index, count, success) {
            return $timeout(function() {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
         }
	};
}]);