"use strict";

angular.module("docdoc")
	.controller("SearchCtrl",[
		"$scope", "Search", function SearchController(
		 $scope,   Search) {

    this.funnelItems = {};
    this.activeFilters = {};
    this.results = [];

    this.search = function() {
        var self = this;
        Search.getResults({ filters:this.activeFilters })
    	.then(function(result) { // result = {data:string|Object, headers:function, config:Object, status:number, statusText:string}
    		var filters = {};
    		self.results = result.data["providers"];
    		self.funnelItems = result.data["facets"];

    		if (!angular.isObject( self.activeFilters ) || Object.keys( self.activeFilters ).length == 0) {
                for (var category in result.data["facets"]) {
                    filters[category] = [];
                }
                self.activeFilters = filters;
    		}
    	})
    	.catch(function(result) {
    		console.error("There was an error when calling API function:");
        	console.error(result);
    	});
    };

    this.toggleFilter = function(category, value) {
        if (!angular.isArray( this.activeFilters[category] )) {
            this.activeFilters[category] = [];
        }

        var idx = this.activeFilters[category].indexOf(value);
        if (idx < 0)
            this.activeFilters[category].push(value);
        else
            this.activeFilters[category].splice(idx, 1);
    }

	this.init = function() {
	    this.search();
	};

//    $scope.$watch(
//		angular.bind(this, function() {
//			return this.activeFilters;
//		}),
//		angular.bind(this, function(newValue) {
//			this.search();
//		},
//		true)
//    );

	// initial actions
	this.init();

}]);