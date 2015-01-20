var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.people = [
    {'name': 'Joe Smith',
     'snippet': 'Engineer, Age 23'},
    {'name': 'John Doe',
     'snippet': 'Doctor, Age 31'},
    {'name': 'Jennifer Hudson',
     'snippet': 'Teacher, Age 42'}
  ];
});