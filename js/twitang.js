angular.module('twitang', []).
    directive('twitterProfile', function() {
	return {
	    restrict: 'E',
	    transclude: true,	    
	    scope: { screenName: '@' },
	    templateUrl: 'twitterProfile.html',
	    replace: true,
	    controller: function($scope) {
		var headerHeight = 52;
		var footerHeight = 41;
		$scope.profileImage = "https://si0.twimg.com/profile_images/2250905904/7169356034_d0e2e23be0_m_normal.png";
		$scope.userName = "Christopher Gammage";
		$scope.height = 800;
		$scope.width = 300;
		$scope.bodyHeight = $scope.height - headerHeight - footerHeight;
	    }
	}; 
    });
