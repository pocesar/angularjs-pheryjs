angular.module('pheryResource', [])
  .factory(
    '$pheryResource'
    ($timeout) ->
      phery_remote = (remote, url) ->
        @element = phery.element remote, url ? target: url
        angular.extend @, @element.phery()
        return 
        
      phery_remote::get = (data, cb, err) ->
        @element.phery('data', 'method', 'GET')
        @element.on(
          'phery:json': (event, data) ->
            $timeout(->
              cb?(data)
            )

          'phery:fail': (event, error) ->
            $timeout(->
              err?(error)
            )
        )
        @element.phery('remote', data)

      phery_remote::post = (data, cb, err) ->
        @element.phery('data', 'method', 'POST')
        @element.on(
          'phery:json': (event, data) ->
            $timeout(->
              cb?(data)
            )

          'phery:fail': (event, error) ->
            $timeout(->
              err?(error)
            )
        )
        @element.phery('remote', data)

      phery_remote::put = (data, cb, err) ->
        @element.phery('data', 'method', 'PUT')
        @element.on(
          'phery:json': (event, data) ->
            $timeout(->
              cb?(data)
            )
            
          'phery:fail': (event, error) ->
            $timeout(->
              err?(error)
            )
        )
        @element.phery('remote', data)

      phery_remote::delete = (data, cb, err) ->
        @element.phery('data', 'method', 'DELETE')
        @element.on(
          'phery:json': (event, data) ->
            $timeout(->
              cb?(data)
            )

          'phery:fail': (event, error) ->
            $timeout(->
              err?(error)
            )
        )
        @element.phery('remote', data)
          
      (remote, url) ->
        new phery_remote(remote, url)
  )
