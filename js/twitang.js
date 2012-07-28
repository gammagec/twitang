angular.module('twitfetcher', ['ngResource']).
    factory('TweetFetcher', function($resource) {
        var TweetFetcher = $resource('http://api.twitter.com/1/statuses/user_timeline.json',
            {
                include_rts: 'true',
                count: 4,
                include_entities: 'true'
            }
        );
        TweetFetcher.prototype.fetch = function(screenName, cb) {
            return TweetFetcher.get({screen_name: screenName}, cb);
        }
        return TweetFetcher;
    });

angular.module('twitang', ['twitfetcher']).
    directive('twitterProfile', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: { screenName: '@' },
            templateUrl: 'twitterProfile.html',
            replace: true,
            controller: function($scope, $attrs, TweetFetcher) {
                var headerHeight = 52;
                var footerHeight = 41;
                $scope.profileImage = null;
                $scope.userName = "";
                $scope.height = 800;
                $scope.width = 300;
                $scope.bodyHeight = $scope.height - headerHeight - footerHeight;
                TweetFetcher.fetch($attrs.screenName, function() {
                });
            }
        };
    });