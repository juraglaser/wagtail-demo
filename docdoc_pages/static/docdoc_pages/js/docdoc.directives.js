"use strict";

angular.module("docdoc")
    .directive("loading", [
        "$http", "$rootScope", function loadingDirective(
         $http,   $rootScope) {

    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            scope.isWaitingResult = function() {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isWaitingResult, function (newVal) {
                if (newVal)
                    element.show();
                else
                    element.hide();
            });
        }
    };

}]);

angular.module("docdoc")
    .directive("toggleCheckOnClick", [
        function ToggleCheckOnClickDirective(
        ) {

    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("click", function(event) {
                var $input = $(element).children("input");
                if ($input.is(":checked"))
                    $input.removeAttr("checked");
                else
                    $input.attr("checked", "checked");
            });
        }
    };

}]);