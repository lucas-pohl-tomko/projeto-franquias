franquia
    .factory('Franquias_Usuarios', function($resource) {
        return $resource(
            'http://localhost:8000/usuarios_franquias/:id/',
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