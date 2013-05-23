(function(){
  angular.module('pheryResource', []).factory('$pheryResource', function($timeout) {
    var phery_remote;

    phery_remote = function(remote, url) {
      this.element = phery.element(remote, url != null ? url : {
        target: url
      });
      angular.extend(this, this.element.phery());
    };
    phery_remote.prototype.get = function(data, cb, err) {
      this.element.phery('data', 'method', 'GET');
      this.element.on({
        'phery:json': function(event, data) {
          return $timeout(function() {
            return typeof cb === "function" ? cb(data) : void 0;
          });
        },
        'phery:fail': function(event, error) {
          return $timeout(function() {
            return typeof err === "function" ? err(error) : void 0;
          });
        }
      });
      return this.element.phery('remote', data);
    };
    phery_remote.prototype.post = function(data, cb, err) {
      this.element.phery('data', 'method', 'POST');
      this.element.on({
        'phery:json': function(event, data) {
          return $timeout(function() {
            return typeof cb === "function" ? cb(data) : void 0;
          });
        },
        'phery:fail': function(event, error) {
          return $timeout(function() {
            return typeof err === "function" ? err(error) : void 0;
          });
        }
      });
      return this.element.phery('remote', data);
    };
    phery_remote.prototype.put = function(data, cb, err) {
      this.element.phery('data', 'method', 'PUT');
      this.element.on({
        'phery:json': function(event, data) {
          return $timeout(function() {
            return typeof cb === "function" ? cb(data) : void 0;
          });
        },
        'phery:fail': function(event, error) {
          return $timeout(function() {
            return typeof err === "function" ? err(error) : void 0;
          });
        }
      });
      return this.element.phery('remote', data);
    };
    phery_remote.prototype["delete"] = function(data, cb, err) {
      this.element.phery('data', 'method', 'DELETE');
      this.element.on({
        'phery:json': function(event, data) {
          return $timeout(function() {
            return typeof cb === "function" ? cb(data) : void 0;
          });
        },
        'phery:fail': function(event, error) {
          return $timeout(function() {
            return typeof err === "function" ? err(error) : void 0;
          });
        }
      });
      return this.element.phery('remote', data);
    };
    return function(remote, url) {
      return new phery_remote(remote, url);
    };
  });
});
