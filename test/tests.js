/* jshint expr: true */
chai.should();

describe('Schema form', function() {

  describe('directive', function() {

    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(module('ui.utils.masks'));
    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should use datetimehtml directive when format is "datetime"', function() {

      inject(function($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.person = {birth: '2015-30-04 21:00:00'};

        scope.schema = {
          type: 'object',
          properties: {
            birth: {
              title: 'Birth moment',
              type: 'number',
              format: 'fixed'
            }
          }
        };

        scope.form = [{
          key: 'birth'
        }];

        var tmpl = angular
                  .element('<form sf-schema="schema" sf-form="form" sf-model="person"></form>');

        $compile(tmpl)(scope);
        $rootScope.$apply();
        tmpl.children().length.should.be.equal(1);
        tmpl.children().eq(0).children().eq(0).is('div').should.be.true;
        tmpl.children().eq(0).children().eq(0).find('input[ui-number-mask]').length.should.ok;

      });
    });
  });

});
