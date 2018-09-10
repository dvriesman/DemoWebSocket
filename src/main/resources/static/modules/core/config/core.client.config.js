'use strict';

angular.module('core').config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://fonts.gstatic.com'
    ]);
}]);
