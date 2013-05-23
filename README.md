angularjs-pheryjs
=================

Pretty simple phery.js AJAX service for AngularJS that mimics $resource, for usage with PHP

This depends on phery.js library https://github.com/pocesar/phery

### Usage

```js
YourController = function($scope, $pheryResource, $timeout){
  $scope.far = $pheryResource('your-remote-function');
  
  $scope.far['delete']({'id':1});
  $scope.far.get({'id':1});
  $scope.far.post($scope.model);
  $scope.far.put($scope.model);
  
  $scope.remote.subscribe({
    'load': function(data){
      $scope.model = data;
    },
    'done': function(){
      $scope.modal.close();
    }
  });
};
```
