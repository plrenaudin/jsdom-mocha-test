/*jshint multistr: true */
var expect = require('chai').expect;
var requirejs = require("../requireJsConf");
var jsdom = require("jsdom");

describe('ViewATest', function() {
  var ViewA, sut;

  var template = '\
      <input name="name" />\
      <input name="description" />'
    ;

  before(function(done){
    jsdom.env('<html><body><form id="ViewA">' + template + '</form></body></html>',function(err, window) {
        global.window = window;

        requirejs(['src/ViewA'], function(viewA) {
          ViewA = viewA;
          sut = new ViewA({
            el: "#ViewA"
          });
          sut.$el.html(template);
          done();
        });
      });
  });

  it('loads the element', function() {
    expect(sut.$el.html()).not.to.be.empty;
  });
});