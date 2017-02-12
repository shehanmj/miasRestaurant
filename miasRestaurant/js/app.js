const myApp = angular.module('myApp', ['ngRoute']);
var breakfast=[
  {'name': 'Coffee', 'price': 2.99, 'image': 'images/coffee.jpeg' },
  {'name': 'Eggs', 'price': 1.99, 'image': 'images/fried_egg.jpg' },
  {'name': 'Toast', 'price': .99, 'image': 'images/toast.jpg' },
  {'name': 'Toast', 'price': .99, 'image': 'images/toast.jpg' },
  {'name': 'Toast', 'price': .99, 'image': 'images/toast.jpg' },
  {'name': 'Toast', 'price': .99, 'image': 'images/toast.jpg' }
];
var lunch=[
  {'name': 'Burger', 'price': 5.99, 'image': 'images/burger.jpeg' },
  {'name': 'Bacon Sandwich', 'price': 5.99, 'image': 'images/baconWrap.jpeg' },
  {'name': 'Beer', 'price': 2.99, 'image': 'images/beer.jpg' },
  {'name': 'Beer', 'price': 2.99, 'image': 'images/beer.jpg' },
  {'name': 'Beer', 'price': 2.99, 'image': 'images/beer.jpg' },
  {'name': 'Beer', 'price': 2.99, 'image': 'images/beer.jpg' }
];
var dinner=[
  {'name': 'Spaghetti', 'price': 9.99, 'image': 'images/spaghetti.jpg' },
  {'name': 'Pizza', 'price': 9.99, 'image': 'images/pizza.jpg' },
  {'name': 'Wine', 'price': 5.99, 'image': 'images/wine.jpeg' },
  {'name': 'Wine', 'price': 5.99, 'image': 'images/wine.jpeg' },
  {'name': 'Wine', 'price': 5.99, 'image': 'images/wine.jpeg' },
  {'name': 'Wine', 'price': 5.99, 'image': 'images/wine.jpeg' }
];
var homePage = [
  {'title': 'Breakfast', 'image': 'images/coffee.jpeg'},
  {'title': 'Lunch', 'image':'images/burger.jpeg'},
  {'title': 'Dinner', 'image':'images/dinner.jpeg'}
];

myApp.config(function($routeProvider){
$routeProvider
  .when('/', {
   templateUrl: 'views/home.html',
   controller: 'menuCtrl'})
  .when('/Breakfast', {
    templateUrl: 'views/breakfast.html',
    controller: 'menuCtrl'})
  .when('/Lunch', {
   templateUrl: 'views/lunch.html',
   controller: 'menuCtrl'})
  .when('/Dinner', {
  templateUrl: 'views/dinner.html',
  controller: 'menuCtrl'})
  .otherwise({redirectTo:'/'});
});
myApp.controller('menuCtrl', ['$scope', function($scope) {
  $scope.breakfast = breakfast;
  $scope.lunch = lunch;
  $scope.dinner = dinner;
  $scope.homePage = homePage;
}]);
