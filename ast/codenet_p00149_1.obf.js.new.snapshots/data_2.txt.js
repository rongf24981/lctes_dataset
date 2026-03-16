function __DECODE_0__(oADaQh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1da;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oADaQh, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e0)) / 0x1 * (parseInt(__DECODE_0__(0x1da)) / 0x2) + parseInt(__DECODE_0__(0x1e6)) / 0x3 + parseInt(__DECODE_0__(0x1e8)) / 0x4 * (-parseInt(__DECODE_0__(0x1dd)) / 0x5) + -parseInt(__DECODE_0__(0x1e4)) / 0x6 + parseInt(__DECODE_0__(0x1e7)) / 0x7 * (parseInt(__DECODE_0__(0x1dc)) / 0x8) + parseInt(__DECODE_0__(0x1e5)) / 0x9 + -parseInt(__DECODE_0__(0x1e9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x39e9f);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1e1), __DECODE_0__(0x1db));
var Arr = input[__DECODE_0__(0x1de)]()[__DECODE_0__(0x1df)]('\x0a');
var a = [0x0, 0x0];
var b = [0x0, 0x0];
var c = [0x0, 0x0];
var d = [0x0, 0x0];
for (var i = 0x0; i < Arr[__DECODE_0__(0x1ea)]; i++) {
  var arr = Arr[i][__DECODE_0__(0x1df)]('\x20')[__DECODE_0__(0x1e2)](Number);
  for (var j = 0x0; j < 0x2; j++) {
    if (arr[j] >= 1.1) {
      a[j]++;
    } else {
      if (arr[j] >= 0.6) {
        b[j]++;
      } else {
        if (arr[j] >= 0.2) {
          c[j]++;
        } else {
          d[j]++;
        }
      }
    }
  }
}
console[__DECODE_0__(0x1e3)](a[0x0] + '\x20' + a[0x1]);
console[__DECODE_0__(0x1e3)](b[0x0] + '\x20' + b[0x1]);
console[__DECODE_0__(0x1e3)](c[0x0] + '\x20' + c[0x1]);
function __STRING_ARRAY__() {
  var _0x3ad410 = ['utf8', '200PMNQXB', '5HPWFeS', 'trim', 'split', '2BoTBmH', '/dev/stdin', 'map', 'log', '261678FwgJxo', '3235122AUSHSG', '435816SoGmYM', '76419SUYRjh', '799144pwgODX', '2326110jXWWdB', 'length', '64430bKzTQF'];
  __STRING_ARRAY__ = function () {
    return _0x3ad410;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x1e3)](d[0x0] + '\x20' + d[0x1]);
