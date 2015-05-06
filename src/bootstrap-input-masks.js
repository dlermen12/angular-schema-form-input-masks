angular.module('schemaForm')
    .config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
      function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

        var availableMasks = ['fixed',
          'postal',
          'money',
          'ie',
          'phone',
          'percentage',
          'cpf',
          'cnpj',
          'cpfcnpj',
          'nfe'];

        function maskIsisAvailable(name, schema, options) {
          if (availableMasks.indexOf(schema.format) > -1) {
            var f = schemaFormProvider.stdFormObj(name, schema, options);
            f.key = options.path;
            f.type = schema.format;
            options.lookup[sfPathProvider.stringify(options.path)] = f;
            return f;
          }
        }

        schemaFormProvider.defaults.number.unshift(maskIsisAvailable);
        schemaFormProvider.defaults.string.unshift(maskIsisAvailable);
        schemaFormProvider.defaults.integer.unshift(maskIsisAvailable);

        availableMasks.forEach(function(mask) {
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              mask,
              'directives/decorators/bootstrap/input/' + mask + '.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              mask,
              'directives/decorators/bootstrap/input/' + mask + '.html'
          );
        })

      }
    ]);
