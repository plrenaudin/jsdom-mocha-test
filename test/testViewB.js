/*jshint multistr: true */
var expect = require('chai').expect;
var requirejs = require("../requireJsConf");
var jsdom = require("jsdom");

describe('ViewBTest', function() {
  var ViewB, sut;

  var template = '\
      <input name="name" />\
      <input name="description" />'
    ;

  before(function(done){
    jsdom.env('<html><body><form id="ViewB">' + template + '</form></body></html>',function(err, window) {
        global.window = window;

        requirejs(['src/ViewB'], function(viewB) {
          ViewB = viewB;
          sut = new ViewB({
            el: "#ViewB"
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