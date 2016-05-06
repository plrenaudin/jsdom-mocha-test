var expect = require('chai').expect;
var requirejs = require("../requireJsConf");
var jsdom = require("jsdom");

describe('ViewATest', function() {
  var ViewA, sut;

  before(function(done){
    jsdom.env('<html><body><div id="app"></div></body></html>',function(err, window) {
        global.window = window;

        requirejs(['src/ViewA'], function(viewA) {
          ViewA = viewA;
          sut = new ViewA({
            el:"#app"
          });
          done();
        });
      });
  });

  it('loads the element', function() {
    expect(sut.$el.html()).not.to.be.empty;
    expect(sut.$('input[name="name"]').val()).to.equal('testA');
  });
});