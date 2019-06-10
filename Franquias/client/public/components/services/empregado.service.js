franquia
    .factory('Empregado', function($resource) {
        return $resource(
            'http://localhost:8000/empregados/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
    });