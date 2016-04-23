/*jshint multistr: true */
var expect = require('chai').expect;
var requirejs = require("../requireJsConf");

describe('ViewATest', function () {
  var sut, _, ViewB;

  var template = '\
      <input name="name" />\
      <input name="description" />';

  before(function (done) {
    requirejs(['underscore', 'src/ViewB'], function (underscore, viewB) {
      _ = underscore;
      ViewB = viewB;
      done();
    });
  });

  beforeEach(function () {
    sut = new ViewB({
      template: _.template(template),
      el: '#sut'
    });
  });

  it('loads the element', function () {
    expect(sut.$el.html()).not.to.be.empty;
    expect(sut.$('input[name="name"]').val()).to.be.equal('testB');
  });
});