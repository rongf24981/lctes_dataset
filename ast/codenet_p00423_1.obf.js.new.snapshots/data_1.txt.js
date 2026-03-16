function __DECODE_0__(GUbTDf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GUbTDf, key);
}
var a0_0x156103 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x31757c = ['log', '2013843GBVYwk', '5898DyWdBh', '8187018nJumXK', '536WWHJNN', '9BysRFL', 'shift', '4384036feJHcj', '/dev/stdin', '786219gCgNwS', '6196224kJSxkW', 'utf8', '25970KntwGZ', '5okJjSh', 'split', 'join', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x31757c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x1dcb20 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1dcb20(0x95)) / 0x1 * (-parseInt(_0x1dcb20(0x97)) / 0x2) + parseInt(_0x1dcb20(0x94)) / 0x3 + -parseInt(_0x1dcb20(0x9a)) / 0x4 * (-parseInt(_0x1dcb20(0x8f)) / 0x5) + parseInt(_0x1dcb20(0x96)) / 0x6 + parseInt(_0x1dcb20(0x9c)) / 0x7 + -parseInt(_0x1dcb20(0x9d)) / 0x8 + parseInt(_0x1dcb20(0x98)) / 0x9 * (parseInt(_0x1dcb20(0x8e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd9a7b);
(function (stdin) {
  var _0x3f2728 = __DECODE_0__;
  var lines = stdin[_0x3f2728(0x92)]()[_0x3f2728(0x90)]('\x0a');
  while (0x1) {
    var line = lines[_0x3f2728(0x99)]();
    if (line == '0') {
      break;
    }
    var n = Number(line);
    var a = 0x0;
    var b = 0x0;
    for (var i = 0x0; i < n; i++) {
      var numbers = lines[_0x3f2728(0x99)]()[_0x3f2728(0x90)]('\x20')['map'](Number);
      if (numbers[0x0] == numbers[0x1]) {
        a += numbers[0x0];
        b += numbers[0x0];
      } else {
        if (numbers[0x0] > numbers[0x1]) {
          a += numbers[0x0] + numbers[0x1];
        } else {
          b += numbers[0x0] + numbers[0x1];
        }
      }
    }
    console[_0x3f2728(0x93)]([a, b][_0x3f2728(0x91)]('\x20'));
  }
})(require('fs')['readFileSync'](a0_0x156103(0x9b), a0_0x156103(0x9e)));
