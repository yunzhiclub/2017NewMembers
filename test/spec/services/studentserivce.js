'use strict';

describe('Service: studentSerivce', function () {

  // load the service's module
  beforeEach(module('2017NewMembersApp'));

  // instantiate service
  var studentSerivce;
  beforeEach(inject(function (_studentSerivce_) {
    studentSerivce = _studentSerivce_;
  }));

  it('should do something', function () {
    expect(!!studentSerivce).toBe(true);
  });

});
