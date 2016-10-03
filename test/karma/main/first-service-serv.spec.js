'use strict';

describe('module: main, service: FirstService', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var FirstService;
  beforeEach(inject(function (_FirstService_) {
    FirstService = _FirstService_;
  }));

  it('should do something', function () {
    expect(!!FirstService).toBe(true);
  });

});
