angularjs-pheryjs
=================

Pretty simple phery.js AJAX service for AngularJS that mimics $resource, for usage with PHP

This depends on phery.js library https://github.com/pocesar/phery

### Usage

```js
app = angular.module('App', []);

app.controller('YourController', function($scope, $pheryResource, $timeout){
  far = $pheryResource('your-remote-function');
  
  /* If you want to reach the JSON callback, you need to return PheryResponse::factory()->json($your_data) */
  far['delete']({'id':1}, function(){ /*JSON*/ }, function(){ /*fail*/ }); //calls your-remote-function with DELETE method and id:1
  far.get({'id':1}, function(){ /*JSON*/ }, function(){ /*fail*/ }); // calls your-remote-function with GET method and id:1
  far.post($scope.model, function(){ /*JSON*/ }, function(){ /*fail*/ }); // calls your-remote-function with POST method and post the data from the model
  far.put($scope.model, function(){ /*JSON*/ }, function(){ /*fail*/ }); // calls your-remote-function with PUT method and put the data from the model
  
  far.subscribe({ // subscribe, reach this by returning a PheryResponse::factory()->publish('load') or 'done' for example
    'load': function(data){
      $scope.model = data;
    },
    'done': function(){
      $scope.modal.close();
    }
  });
  
  phery.broadcast('done'); // trigger the subscribed event everythere
  far.publish('done'); // trigger the subscribed event only on this element
  
  far.remote([1,3,4]); // call the remote your-remote-function with any king of arguments directly
  
  far.proxy('div.load'); // proxy this detached element to another DOM element
  
  far.element.on('phery:retry', function(trycount){ // all phery events are available on the element member
    $timeout(function(){
      $scope.message = 'Retrying ' + trycount + '...';
    });
  });
});
```
