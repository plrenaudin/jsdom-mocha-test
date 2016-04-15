Original issue: [link](https://github.com/tmpvar/jsdom/issues/1441)

Run ```mocha test/testViewA.js``` = pass

Run ```mocha test/testViewB.js``` = pass

Run ```mocha test/testViewA.js test/testViewB.js``` = fail on second test

Run ```mocha test/testViewB.js test/testViewA.js``` = fail on second test
