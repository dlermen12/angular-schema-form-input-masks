angular.module('schemaForm')
    .config(['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
      function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

        var availableMasks = ['fixed',
          'cep',
          'money',
          'ie',
          'br-phone',
          'us-phone',
          'scientific',
          'percentage',
          'cpf',
          'cnpj',
          'cpfcnpj',
          'nfe'];

        function maskIsAvailable(name, schema, options) {
          if (availableMasks.indexOf(schema.format) > -1) {
            var f = schemaFormProvider.stdFormObj(name, schema, options);
            f.key = options.path;
            f.type = 'inputmasks';
            options.lookup[sfPathProvider.stringify(options.path)] = f;

            if (!schema.validationMessage) {
              switch (schema.format) {
                case 'cpfcnpj':
                  schema.validationMessage = 'CPF ou CNPJ inválido';
                  break;
                case 'cpf':
                  schema.validationMessage = 'CPF inválido';
                  break;
                case 'cnpj':
                  schema.validationMessage = 'CNPJ inválido';
                  break;
                case 'ie':
                  schema.validationMessage = 'Inscrição inválida';
                  break;
                case 'cep':
                  schema.validationMessage = 'CEP inválido';
                  break;
                case 'nfe':
                  schema.validationMessage = 'Número da chave é inválido';
                  break;
                case 'br-phone':
                  schema.validationMessage = 'Número inválido';
                  break;
                case 'us-phone':
                  schema.validationMessage = 'Invalid phone number';
                  break;
              }
            }

            return f;
          }
        }

        schemaFormProvider.defaults.number.unshift(maskIsAvailable);
        schemaFormProvider.defaults.string.unshift(maskIsAvailable);
        schemaFormProvider.defaults.integer.unshift(maskIsAvailable);

        schemaFormDecoratorsProvider.addMapping(
            'bootstrapDecorator',
            'inputmasks',
            'directives/decorators/bootstrap/inputmasks/input.html'
        );
        schemaFormDecoratorsProvider.createDirective(
            'inputmasks',
            'directives/decorators/bootstrap/inputmasks/input.html'
        );

      }
    ]);
