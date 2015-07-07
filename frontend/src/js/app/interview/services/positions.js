'use strict';

var app = angular.module('app');

app.factory('Position', ['$resource', function ($resource) {
         
      return $resource(API_END_POINT + '/position', { positionId : '@positionId' },
        {
          get:{
          	method: 'GET',
          	transformResponse: function(data) {
          		return { "data" : data.data };
          	}
          },
          query: {
              method: 'POST',
              transformRequest: function (data) {
                 return JSON.stringify({'data': data});
              }
          },
          allFromUser: {
          	  url: API_END_POINT + '/user/facilities',
          	  method: 'POST',
          	  transformRequest: function (data) {
                 return JSON.stringify({'data': data});
              }
          }


      });

}]);