/**
 * Created by Jian Wu on 02/03/2016
 */
 var dfVizApp = angular.module('dfVizApp', ['ui.router', 'ui.bootstrap']);

 dfVizApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', 
               { url: '/home', templateUrl: 'view/home.html'
               })
        .state('dataframes', 
               { url: '/dataframes', templateUrl: 'view/dataframes.html'
               })
        .state('views', 
               { url: '/views', templateUrl: 'view/dfviews.html'
               })
        .state('sparksql', 
               { url: '/sparksql', templateUrl: 'view/sparksqlquery.html'
               });
});