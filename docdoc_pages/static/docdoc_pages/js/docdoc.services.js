"use strict";

angular.module("docdoc")
    .constant("AppCfg", {

    urlRoot: ""

});

angular.module("docdoc")
    .value("AppGlobals", {

    // catalog of globally available variables

});

angular.module("docdoc")
    .factory("Provider", [
        "$http", "AppGlobals", "AppCfg", function ProviderFactory(
         $http,   AppGlobals,   AppCfg) {

    return {
        getProvider: function(config) {
            return $http({
                url: AppCfg["urlRoot"] + "/provider",
                method: "GET"
            });
        }
    };

}]);

angular.module("docdoc")
    .factory("Utils", function UtilsFactory() {

    return {
        getIndexByGuid: function(guid, array, guidKey) {
            if ( !angular.isNumber(guidKey) && !angular.isString(guidKey) )
                guidKey = "guid";
            for (var i=0; i<array.length; i++) {
                if (typeof array[i] !== "undefined" && typeof array[i][guidKey] !== "undefined"
                    && array[i][guidKey] == guid)
                return i;
            }
            return -1;
        },
        getElementByGuid: function(guid, array, guidKey) {
            if ( !angular.isNumber(guidKey) && !angular.isString(guidKey) )
                guidKey = "guid";
            for (var i=0; i<array.length; i++) {
                if (typeof array[i] !== "undefined" && typeof array[i][guidKey] !== "undefined"
                    && array[i][guidKey] == guid)
                return array[i];
            }
            return null;
        },
        parseJSON: function(json) {
            if (typeof JSON != "undefined" && typeof JSON.parse == "function") {
                return JSON.parse( json );
            }
            else if (typeof jQuery != "undefined") {
                return jQuery.parseJSON( json );
            }
            else {
                return "could not parse JSON";
            }
        },
        stringifyJSON: function(json) {
            if (typeof JSON != "undefined" && typeof JSON.stringify == "function") {
                return JSON.stringify( json );
            }
            else {
                return "could not stringify JSON";
            }
        }
    };
});