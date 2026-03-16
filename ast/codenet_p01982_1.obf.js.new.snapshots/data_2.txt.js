function __DECODE_0__(KjDKIv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KjDKIv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f5)) / 0x1 * (parseInt(__DECODE_0__(0x1f8)) / 0x2) + parseInt(__DECODE_0__(0x1f2)) / 0x3 * (parseInt(__DECODE_0__(0x1e5)) / 0x4) + -parseInt(__DECODE_0__(0x1e7)) / 0x5 + parseInt(__DECODE_0__(0x1e9)) / 0x6 + -parseInt(__DECODE_0__(0x1f0)) / 0x7 * (parseInt(__DECODE_0__(0x1ec)) / 0x8) + parseInt(__DECODE_0__(0x1eb)) / 0x9 * (parseInt(__DECODE_0__(0x1f9)) / 0xa) + parseInt(__DECODE_0__(0x1f1)) / 0xb * (-parseInt(__DECODE_0__(0x1e6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc6287);
var input = require('fs')[__DECODE_0__(0x1f3)](__DECODE_0__(0x1f7), __DECODE_0__(0x1ed));
var arr = input['trim']()[__DECODE_0__(0x1f6)]('\x0a');
function __STRING_ARRAY__() {
  var _0x4b4a31 = ['000', 'push', '76CYyXnl', '2138244RzUhzC', '6377760QlSvcM', 'join', '6978132tIsKmo', 'log', '36TTkRzE', '1067320SpTBIZ', 'utf8', 'shift', 'map', '77IGIalI', '55HEbdHL', '217149GpoYoW', 'readFileSync', 'length', '19244CNaBSb', 'split', '/dev/stdin', '118lQgDwd', '1930030IjkNwz'];
  __STRING_ARRAY__ = function () {
    return _0x4b4a31;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var nlr = arr['shift']()[__DECODE_0__(0x1f6)]('\x20')[__DECODE_0__(0x1ef)](Number);
  if (nlr[__DECODE_0__(0x1e8)]('') == __DECODE_0__(0x1e3)) {
    break;
  }
  var [n, l, r] = [nlr[0x0], nlr[0x1], nlr[0x2]];
  var A = [];
  for (var i = 0x0; i < n; i++) {
    A[__DECODE_0__(0x1e4)](arr[__DECODE_0__(0x1ee)]() - 0x0);
  }
  var cnt = 0x0;
  for (var x = l; x <= r; x++) {
    var flag = !![];
    for (var i = 0x0; i < A[__DECODE_0__(0x1f4)]; i++) {
      if (x % A[i] == 0x0) {
        flag = ![];
        if ((i + 0x1) % 0x2 != 0x0) {
          cnt++;
        }
        break;
      }
    }
    if (flag && n % 0x2 == 0x0) {
      cnt++;
    }
  }
  console[__DECODE_0__(0x1ea)](cnt);
}
