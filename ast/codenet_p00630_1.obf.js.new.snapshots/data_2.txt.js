(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ed)) / 0x1 * (parseInt(__DECODE_0__(0x1f0)) / 0x2) + parseInt(__DECODE_0__(0x1f1)) / 0x3 + parseInt(__DECODE_0__(0x1f6)) / 0x4 + -parseInt(__DECODE_0__(0x1f7)) / 0x5 + parseInt(__DECODE_0__(0x1fc)) / 0x6 + -parseInt(__DECODE_0__(0x1fa)) / 0x7 + -parseInt(__DECODE_0__(0x1f8)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6eff7);
function __STRING_ARRAY__() {
  var _0x5b3984 = ['join', 'length', 'utf8', '100phNOWM', 'shift', 'replace', '2480DsuzGQ', '542844qbfcME', 'log', 'readFileSync', 'toUpperCase', 'split', '2991064CUAgpm', '2885385upxYFm', '6836184rgxlBy', '/dev/stdin', '396116bLbPWD', 'toLowerCase', '5340726jPOTkK'];
  __STRING_ARRAY__ = function () {
    return _0x5b3984;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VGqSEb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ea;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VGqSEb, key);
}
var input = require('fs')[__DECODE_0__(0x1f3)](__DECODE_0__(0x1f9), __DECODE_0__(0x1ec));
var Arr = input[__DECODE_0__(0x1ef)](/\n$/, '')['split']('\x0a');
while (!![]) {
  var nt = Arr[__DECODE_0__(0x1ee)]()[__DECODE_0__(0x1f5)]('\x20');
  var str = nt[0x0];
  var type = nt[0x1];
  if (type == 'X') {
    break;
  }
  str = str[__DECODE_0__(0x1ef)](/^./, function (s) {
    return s['toLowerCase']();
  });
  str = str['replace'](/[A-Z]/g, function (s) {
    return '_' + s;
  });
  var arr = str[__DECODE_0__(0x1f5)]('_');
  for (var i = 0x1; i < arr[__DECODE_0__(0x1eb)]; i++) {
    arr[i] = arr[i][__DECODE_0__(0x1ef)](/./, function (s) {
      return s[__DECODE_0__(0x1f4)]();
    });
  }
  if (type == 'U') {
    arr[0x0] = arr[0x0][__DECODE_0__(0x1ef)](/^./, function (s) {
      return s[__DECODE_0__(0x1f4)]();
    });
    console['log'](arr[__DECODE_0__(0x1ea)](''));
  }
  if (type == 'L') {
    console[__DECODE_0__(0x1f2)](arr['join'](''));
  }
  if (type == 'D') {
    console['log'](arr[__DECODE_0__(0x1ea)]('_')[__DECODE_0__(0x1fb)]());
  }
}
