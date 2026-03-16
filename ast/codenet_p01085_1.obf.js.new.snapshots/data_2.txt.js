function __DECODE_0__(SgZuxn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SgZuxn, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe1)) / 0x1 + -parseInt(__DECODE_0__(0xe0)) / 0x2 + -parseInt(__DECODE_0__(0xe4)) / 0x3 + parseInt(__DECODE_0__(0xd9)) / 0x4 + parseInt(__DECODE_0__(0xda)) / 0x5 * (parseInt(__DECODE_0__(0xe6)) / 0x6) + -parseInt(__DECODE_0__(0xdd)) / 0x7 * (parseInt(__DECODE_0__(0xdc)) / 0x8) + -parseInt(__DECODE_0__(0xdf)) / 0x9 * (-parseInt(__DECODE_0__(0xe5)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3d2bb);
function Main(input) {
  input = input[__DECODE_0__(0xe2)]('\x0a');
  var k = 0x0;
  while (0x1) {
    input[k] = input[k][__DECODE_0__(0xe2)]('\x20');
    var m = parseInt(input[k][0x0], 0xa);
    var nmin = parseInt(input[k][0x1], 0xa);
    var nmax = parseInt(input[k++][0x2], 0xa);
    if (m == 0x0 && nmin == 0x0 && nmax == 0x0) {
      break;
    }
    var maxg = 0x0;
    var maxn = 0x0;
    var p = [];
    for (var i = 0x0; i < m; i++) {
      p[i] = parseInt(input[k++], 0xa);
    }
    for (var i = nmin - 0x1; i < nmax; i++) {
      if (p[i] - p[i + 0x1] >= maxg) {
        maxg = p[i] - p[i + 0x1];
        maxn = i;
      }
    }
    console[__DECODE_0__(0xdb)](maxn + 0x1);
  }
}
Main(require('fs')[__DECODE_0__(0xde)](__DECODE_0__(0xe7), __DECODE_0__(0xe3)));
function __STRING_ARRAY__() {
  var _0x39e5b6 = ['1666840apOnTz', '7JIovYR', 'readFileSync', '9jGGoIT', '776830DLsIIM', '47514DxaoZt', 'split', 'utf8', '361647SuKbDb', '8441270fsRcYK', '42906bqAVAe', '/dev/stdin', '219120CMJCZU', '15msigkZ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x39e5b6;
  };
  return __STRING_ARRAY__();
}
