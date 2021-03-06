'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {

	function getImageURL(imageArray){
		var tempArray = [];
		for(var i in imageArray){
			if (imageArray[i][4] == 's'){
				tempArray.push(imageArray[i]);
			}
		}
		return tempArray;
	}

	$scope.CreateMural = function(){
		$scope.CollageTitle;
		$scope.HeaderVisible=true;
		var keywords=[];
		$scope.imgSrc = [];

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
					url: 'https://www.google.com/search?q=' + keywords[i] + '&tbm=isch&tbs=isz:m,ift:jpg'
				}).then(function successCallback(response) {
					var splittext = response.data;
					var newsplittext = splittext.split('"ou":"');
					newsplittext = getImageURL(newsplittext);
					var tempString = newsplittext[Math.floor(Math.random() * 4) + 1];
					var linkF = tempString.split('"');
					$scope.imgSrc.push(linkF[0]);
				}, function errorCallback(response) {
					alert(response.data);
				});
			}
		}
		
	}
	$scope.createNapoleon = function(){
		$scope.CollageTitle = "Napoleon";
		$scope.Keyword1 = "Pig";
		$scope.Keyword2 = "Communist";
		$scope.Keyword3 = "Violent";
		$scope.Keyword4 = "Dictator";
		$scope.Keyword5 = "Treacherous";
		$scope.Keyword6 = "Joseph Stalin";
	}
	$scope.createSnowball = function(){
		$scope.CollageTitle = "Snowball";
		$scope.Keyword1 = "Pig";
		$scope.Keyword2 = "Persuasive";
		$scope.Keyword3 = "Intelligent";
		$scope.Keyword4 = "Eloquent";
		$scope.Keyword5 = "Trustworthy";
		$scope.Keyword6 = "Leon Trotsky";
	}
	$scope.createBenjamin = function(){
		$scope.CollageTitle = "Benjamin";
		$scope.Keyword1 = "Donkey";
		$scope.Keyword2 = "Apathetic";
		$scope.Keyword3 = "Old";
		$scope.Keyword4 = "Pessimistic";
		$scope.Keyword5 = "Cynical";
		$scope.Keyword6 = "Intelligent";
	}
	$scope.createBoxer = function(){
		$scope.CollageTitle = "Boxer";
		$scope.Keyword1 = "Horse";
		$scope.Keyword2 = "Strong";
		$scope.Keyword3 = "Loyal";
		$scope.Keyword4 = "Dedicated";
		$scope.Keyword5 = "Simple";
		$scope.Keyword6 = "Working Class";
	}
	$scope.createSquealer = function(){
		$scope.CollageTitle = "Squealer";
		$scope.Keyword1 = "Pig";
		$scope.Keyword2 = "Propoganda";
		$scope.Keyword3 = "Deciever";
		$scope.Keyword4 = "Politician";
		$scope.Keyword5 = "Manupilative";
		$scope.Keyword6 = "Persuasive";
	}
	$scope.createJones = function(){
		$scope.CollageTitle = "Mr. Jones";
		$scope.Keyword1 = "Human";
		$scope.Keyword2 = "Farmer";
		$scope.Keyword3 = "Drunk";
		$scope.Keyword4 = "Unkind";
		$scope.Keyword5 = "Irresponsible";
		$scope.Keyword6 = "Tsar Nicholas II";
	}
	$scope.createDogs = function(){
		$scope.CollageTitle = "The 9 Dogs";
		$scope.Keyword1 = "Viscous Dogs";
		$scope.Keyword2 = "Private";
		$scope.Keyword3 = "Violent";
		$scope.Keyword4 = "Corrupted";
		$scope.Keyword5 = "Secret";
		$scope.Keyword6 = "NKVD";
	}
}]);