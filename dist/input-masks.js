angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/input/fixed.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n\n   <label class=\"control-label {{form.labelHtmlClass}}\"\n          ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label>\n\n   <div ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n      <span ng-if=\"form.fieldAddonLeft\"\n            class=\"input-group-addon\"\n            ng-bind-html=\"form.fieldAddonLeft\"></span>\n      <input ng-show=\"form.key\"\n             style=\"background-color: white\"\n             type=\"text\"\n             ui-number-mask=\"form.schema.decimals\"\n             ng-attr-ui-negative-number=\"{{form.negative}}\"\n             min=\"form.min\"\n             max=\"form.max\"\n             ng-attr-ui-hide-group-sep=\"{{form.separator}}\"\n             class=\"form-control {{form.fieldHtmlClass}}\"\n             schema-validate=\"form\"\n             ng-model=\"$$value$$\"\n             schema-form-numberhtml\n             name=\"{{form.key.slice(-1)[0]}}\"/>\n      <span ng-if=\"form.fieldAddonRight\"\n            class=\"input-group-addon\"\n            ng-bind-html=\"form.fieldAddonRight\"></span>\n   </div>\n      <span ng-if=\"form.feedback !== false\"\n            class=\"form-control-feedback\"\n            ng-style=\"{\'padding-right\':form.fieldAddonRight?60:0+\'px\'}\"\n            ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"\n            aria-hidden=\"true\">\n      </span>\n   <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n\n</div>\n");}]);
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
          'cnpj'];

        function isAvailable(name, schema, options) {
          if (availableMasks.indexOf(schema.format) > -1) {
            var f = schemaFormProvider.stdFormObj(name, schema, options);
            f.key = options.path;
            f.type = schema.format;
            options.lookup[sfPathProvider.stringify(options.path)] = f;

            //schema.validationMessages = {
            //  checkDecimals: 'The maximum numbers of decimals is {{schema.decimals}}',
            //  checkLength: 'Length error'
            //};
            return f;
          }
        }

        schemaFormProvider.defaults.number.unshift(isAvailable);
        schemaFormProvider.defaults.string.unshift(isAvailable);
        schemaFormProvider.defaults.integer.unshift(isAvailable);

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
