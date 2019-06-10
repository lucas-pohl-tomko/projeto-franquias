franquia
    .factory('Franquia', function($resource) {
        return $resource(
            'http://localhost:8000/franquias/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json',
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
    });