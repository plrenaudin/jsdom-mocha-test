/*jshint multistr: true */
var expect = require('chai').expect;
var requirejs = require("../requireJsConf");

describe('ViewATest', function () {
  var sut, _, ViewB;

  before(function (done) {
    requirejs(['underscore', 'src/ViewB'], function (underscore, viewB) {
      _ = underscore;
      ViewB = viewB;
      done();
    });
  });

  beforeEach(function () {
    sut = new ViewB({
      el: '#sut'
    });
  });

  it('loads the element', function () {
    expect(sut.$el.html()).not.to.be.empty;
    expect(sut.$('input[name="nameB"]').val()).to.be.equal('testB');
  });
});