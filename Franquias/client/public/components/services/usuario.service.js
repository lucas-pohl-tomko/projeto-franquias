franquia
    .factory('Usuario', function($resource) {
        return $resource(
            'http://localhost:8000/usuarios/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    },
                },
            },
            {
                stripTrailingSlashes: false
            }
        );
    });