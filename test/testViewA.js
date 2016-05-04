/*jshint multistr: true */
var expect = require('chai').expect;
var requirejs = require("../requireJsConf");

describe('ViewATest', function () {
  var sut, _, ViewA;

  before(function (done) {
    requirejs(['underscore', 'src/ViewA'], function (underscore, viewA) {
      _ = underscore;
      ViewA = viewA;
      done();
    });
  });

  beforeEach(function () {
    sut = new ViewA({
      el: '#sut'
    });
  });

  it('loads the element', function () {
    expect(sut.$el.html()).not.to.be.empty;
    expect(sut.$('input[name="nameA"]').val()).to.be.equal('testA');
  });
});