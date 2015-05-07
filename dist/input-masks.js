angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/inputmasks/input.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n\n   <label class=\"control-label {{form.labelHtmlClass}}\"\n          ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label>\n\n   <div\n      ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n      <span ng-if=\"form.fieldAddonLeft\"\n            class=\"input-group-addon\"\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\n\n\n      <input ng-if=\"form.schema.format==\'cpfcnpj\'\"\n             ui-br-cpfcnpj-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'br-phone\'\"\n             ui-br-phone-number\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'us-phone\'\"\n             ui-us-phone-number\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'cep\'\"\n             ui-br-cep-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'cpf\'\"\n             ui-br-cpf-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'cnpj\'\"\n             ui-br-cnpj-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'ie\'\"\n             ui-br-ie-mask=\"form.uf()\"\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'nfe\'\"\n             ui-nfe-access-key-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'scientific\'\"\n             ui-scientific-notation-mask\n\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'fixed\'\"\n             ui-number-mask=\"form.schema.decimals\"\n             ng-attr-ui-negative-number=\"{{form.negative}}\"\n             ng-attr-min=\"{{form.min}}\"\n             ng-attr-max=\"{{form.max}}\"\n             ng-attr-ui-hide-group-sep=\"{{form.separator}}\"\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'percentage\'\"\n             ui-percentage-mask=\"form.schema.decimals\"\n             ng-attr-min=\"{{form.min}}\"\n             ng-attr-max=\"{{form.max}}\"\n             ng-attr-ui-hide-group-sep=\"{{form.separator}}\"\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <input ng-if=\"form.schema.format==\'money\'\"\n             ui-money-mask=\"form.schema.decimals\"\n             ng-attr-min=\"{{form.min}}\"\n             ng-attr-max=\"{{form.max}}\"\n             ng-attr-ui-hide-group-sep=\"{{form.separator}}\"\n      ng-show=\"form.key\"\nstyle=\"background-color: white\"\ntype=\"text\"\nclass=\"form-control {{form.fieldHtmlClass}}\"\nschema-validate=\"form\"\nng-model=\"$$value$$\"\nname=\"{{form.key.slice(-1)[0]}}\"\n\n      />\n\n      <span ng-if=\"form.fieldAddonRight\"\n            class=\"input-group-addon\"\n            ng-bind-html=\"form.fieldAddonRight\"></span>\n   </div>\n      <span ng-if=\"form.feedback !== false\"\n            class=\"form-control-feedback\"\n            ng-style=\"{\'padding-right\':form.fieldAddonRight?60:0+\'px\'}\"\n            ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n            aria-hidden=\"true\">\n      </span>\n   <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n\n</div>\n");}]);
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
