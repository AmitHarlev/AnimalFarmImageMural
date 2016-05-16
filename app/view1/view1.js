'use strict';

var keywords=[];
var paramsArray = {};
        paramsArray.q = ""; // search text
        paramsArray.num = 1; // integer value range between 1 to 10 including
        paramsArray.start = 2; // integer value range between 1 to 101, it is like the offset
        paramsArray.imgSize = "medium"; // for image size
        paramsArray.imgType = "photo";
        paramsArray.searchType = "image"; // compulsory 
        //params.fileType = "jpg"; // you can leave these if extension does not matters you
        paramsArray.key = "AIzaSyC4TaZPVwxA39f1Cg778szPUjyYa0-X7o8"; // API_KEY got from https://console.developers.google.com/
        paramsArray.cx = "013248736876494194515:atn_t6mqxyo"; // cx value is the custom search engine value got from https://cse.google.com/cse(if not created then create it)


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
        		}
        	}
        }]);