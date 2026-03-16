(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xff)) / 0x1 * (-parseInt(__DECODE_0__(0x103)) / 0x2) + parseInt(__DECODE_0__(0x102)) / 0x3 + -parseInt(__DECODE_0__(0x10d)) / 0x4 * (parseInt(__DECODE_0__(0x10c)) / 0x5) + -parseInt(__DECODE_0__(0x108)) / 0x6 * (-parseInt(__DECODE_0__(0x10f)) / 0x7) + -parseInt(__DECODE_0__(0x106)) / 0x8 * (parseInt(__DECODE_0__(0x10a)) / 0x9) + -parseInt(__DECODE_0__(0x111)) / 0xa * (-parseInt(__DECODE_0__(0x10b)) / 0xb) + -parseInt(__DECODE_0__(0x107)) / 0xc * (-parseInt(__DECODE_0__(0xfd)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9791f);
function __STRING_ARRAY__() {
  var _0x3456d3 = ['log', '993387uCLtTg', '4aNofcA', 'push', 'sort', '6689272MOvEQL', '4545624lOyqmH', '1290CgOLxf', 'split', '9WEwNpl', '1132538MTReaM', '9395soLitI', '2600rwrfWe', 'slice', '27307BcKUMU', 'length', '10rCxJRW', '52ohiHSE', 'map', '54835LkDsfo', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3456d3;
  };
  return __STRING_ARRAY__();
}
var toInt = x => parseInt(x, 0xa);
var toIntArr = arr => arr[__DECODE_0__(0xfe)](x => toInt(x));
function __DECODE_0__(SjkcNb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SjkcNb, key);
}
var abs = x => x > 0x0 ? x : -x;
function min() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x110)]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var rest = arguments;
  var val = rest[0x0];
  for (var i = 0x1; i < rest[__DECODE_0__(0x110)]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x100), 'utf8'));
function Main(input) {
  var input = input[__DECODE_0__(0x109)]('\x0a');
  var s = input[0x0];
  var k = toInt(input[0x1]);
  var l = s['length'];
  var arr = [];
  var x;
  for (var i = 0x0; i < l; i++) {
    for (var j = i; j < i + 0x5; j++) {
      x = s[__DECODE_0__(0x10e)](i, j + 0x1);
      if (arr['indexOf'](x) === -0x1) {
        arr[__DECODE_0__(0x104)](x);
      }
    }
  }
  arr[__DECODE_0__(0x105)]((a, b) => a < b ? -0x1 : 0x1);
  ans = arr[k - 0x1];
  console[__DECODE_0__(0x101)](ans);
}
