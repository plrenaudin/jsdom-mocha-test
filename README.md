Original issue: [link](https://github.com/tmpvar/jsdom/issues/1441)

Run `mocha test/testViewA.js` = pass

Run `mocha test/testViewB.js` = pass

Run `mocha test/testViewA.js test/testViewB.js` = fail on second test (now passes)

Run `mocha test/testViewB.js test/testViewA.js` = fail on second test (now passes)

This was due to the fact that the dom instace created by jsdom is shared among jsdom instances.
Workaround is to use the same div (`<div id="app">`) to build the backbone views on.