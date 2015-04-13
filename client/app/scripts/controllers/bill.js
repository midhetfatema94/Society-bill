'use strict';

angular.module('midhetApp')

// .controlller('BillCtrl',['$scope' ,function( $scope){
// 	// console.log($scope.post.part1);
	
	
	
// }]);


// angular.module('Bill',[])

.controller('BillCtrl', ['$scope','$http', 'resourceObject', 'Record', function($scope, $http, resourceObject, Record){
	console.log('billCtrl loaded');
	// console.log(resourceObject);

    $scope.noticeValues = resourceObject.nRead.query();
    console.log($scope.noticeValues);

    $scope.parseFloat = function(value)
    {
        return parseFloat(value);
    }

    $scope.save = function(post){
    	post.gtotal = parseFloat(post.total1)+parseFloat(post.total2)+parseFloat(post.total3)+parseFloat(post.total4)+parseFloat(post.total5)+parseFloat(post.total6);
    	console.log(post);
    }

    $scope.addUser = function(post){
          var record = new Record(post);
          var sum = parseFloat(record.total1)+parseFloat(record.total2)+parseFloat(record.total3)+parseFloat(record.total4)+parseFloat(record.total5)+parseFloat(record.total6);
          record.gtotal = sum.toString();
          console.log(record);
          record.$create(post);

          // console.log('notice pushed');
          
    };    

}])

.factory('Record', function($resource) {
    return $resource('http://localhost:3000/record/', {}, {
        get   : {method: 'GET', url: 'http://localhost:3000/record/'},
        update: {method : 'POST', url: 'http://localhost:3000/record/update'},
        create : {method : 'POST', url: 'http://localhost:3000/record/create'},
        delete : {method: 'POST' , url: 'http://localhost:3000/record/delete'}
    });
})

.factory('resourceObject', function($resource) {
  var anguCRUD = {};
  anguCRUD.nCreate = $resource('http://localhost:3000/record/create');
  anguCRUD.nRead = $resource('http://localhost:3000/record/fetch');
  anguCRUD.nUpdate = $resource('http://localhost:3000/record/update');
  anguCRUD.nDelete = $resource('http://localhost:3000/record/delete');

  return anguCRUD;
})
;