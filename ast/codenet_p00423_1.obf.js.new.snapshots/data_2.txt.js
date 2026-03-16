function __DECODE_0__(GUbTDf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GUbTDf, key);
}
function __STRING_ARRAY__() {
  var _0x31757c = ['log', '2013843GBVYwk', '5898DyWdBh', '8187018nJumXK', '536WWHJNN', '9BysRFL', 'shift', '4384036feJHcj', '/dev/stdin', '786219gCgNwS', '6196224kJSxkW', 'utf8', '25970KntwGZ', '5okJjSh', 'split', 'join', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x31757c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x95)) / 0x1 * (-parseInt(__DECODE_0__(0x97)) / 0x2) + parseInt(__DECODE_0__(0x94)) / 0x3 + -parseInt(__DECODE_0__(0x9a)) / 0x4 * (-parseInt(__DECODE_0__(0x8f)) / 0x5) + parseInt(__DECODE_0__(0x96)) / 0x6 + parseInt(__DECODE_0__(0x9c)) / 0x7 + -parseInt(__DECODE_0__(0x9d)) / 0x8 + parseInt(__DECODE_0__(0x98)) / 0x9 * (parseInt(__DECODE_0__(0x8e)) / 0xa);
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
  var lines = stdin[__DECODE_0__(0x92)]()[__DECODE_0__(0x90)]('\x0a');
  while (0x1) {
    var line = lines[__DECODE_0__(0x99)]();
    if (line == '0') {
      break;
    }
    var n = Number(line);
    var a = 0x0;
    var b = 0x0;
    for (var i = 0x0; i < n; i++) {
      var numbers = lines[__DECODE_0__(0x99)]()[__DECODE_0__(0x90)]('\x20')['map'](Number);
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
    console[__DECODE_0__(0x93)]([a, b][__DECODE_0__(0x91)]('\x20'));
  }
})(require('fs')['readFileSync'](__DECODE_0__(0x9b), __DECODE_0__(0x9e)));
