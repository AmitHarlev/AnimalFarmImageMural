'use strict';

var keywords=[];

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
	$scope.imgSrc = [];
	$scope.CreateMural = function(){

		if($scope.Keyword1!=null)
			keywords.push($scope.Keyword1);
		if($scope.Keyword2!=null)
			keywords.push($scope.Keyword2);
		if($scope.Keyword3!=null)
			keywords.push($scope.Keyword3);
		if($scope.Keyword4!=null)
			keywords.push($scope.Keyword4);
		if($scope.Keyword5!=null)
			keywords.push($scope.Keyword5);
		if($scope.Keyword6!=null)
			keywords.push($scope.Keyword6);

		if(keywords!=null){
			for(var i=0;i<keywords.length;i++){
				$http({
					method: 'GET',
					url: 'https://www.google.com/search?q=' + keywords[i] + '&tbm=isch'
				}).then(function successCallback(response) {
					var splittext = response.data;
					var newsplittext = splittext.split('"ou":"');
					var tempString = newsplittext[1];
					var linkF = tempString.split('"');
					$scope.imgSrc.push(linkF[0]);
				}, function errorCallback(response) {
					alert(response.data);
				});
			}
		}
        		/*if($scope.Keyword1!=null)
        			keywords.push($scope.Keyword1);
        		if($scope.Keyword2!=null)
        			keywords.push($scope.Keyword2);
        		if($scope.Keyword3!=null)
        			keywords.push($scope.Keyword3);
        		if($scope.Keyword4!=null)
        			keywords.push($scope.Keyword4);
        		if($scope.Keyword5!=null)
        			keywords.push($scope.Keyword5);
        		if($scope.Keyword6!=null)
        			keywords.push($scope.Keyword6);

        		if(keywords!=null){
        			for(var i=0;i<keywords.length;i++){
        				paramsArray.q = keywords[i];
        				$http({
        					method: 'GET',
        					url: 'https://www.googleapis.com/customsearch/v1',
        					params:paramsArray
        				}).then(function successCallback(response) {
        						$scope.imgSrc.push(response.data.items[0].link);
        				}, function errorCallback(response) {
        					alert(response.data);
        				});
        			}
        		}*/
        	}
        }]);