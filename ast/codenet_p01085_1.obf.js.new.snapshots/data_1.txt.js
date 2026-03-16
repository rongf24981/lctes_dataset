function __DECODE_0__(SgZuxn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SgZuxn, key);
}
var a0_0xc55b5d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4eea66 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4eea66(0xe1)) / 0x1 + -parseInt(_0x4eea66(0xe0)) / 0x2 + -parseInt(_0x4eea66(0xe4)) / 0x3 + parseInt(_0x4eea66(0xd9)) / 0x4 + parseInt(_0x4eea66(0xda)) / 0x5 * (parseInt(_0x4eea66(0xe6)) / 0x6) + -parseInt(_0x4eea66(0xdd)) / 0x7 * (parseInt(_0x4eea66(0xdc)) / 0x8) + -parseInt(_0x4eea66(0xdf)) / 0x9 * (-parseInt(_0x4eea66(0xe5)) / 0xa);
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
  var _0x1864b1 = __DECODE_0__;
  input = input[_0x1864b1(0xe2)]('\x0a');
  var k = 0x0;
  while (0x1) {
    input[k] = input[k][_0x1864b1(0xe2)]('\x20');
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
    console[_0x1864b1(0xdb)](maxn + 0x1);
  }
}
Main(require('fs')[a0_0xc55b5d(0xde)](a0_0xc55b5d(0xe7), a0_0xc55b5d(0xe3)));
function __STRING_ARRAY__() {
  var _0x39e5b6 = ['1666840apOnTz', '7JIovYR', 'readFileSync', '9jGGoIT', '776830DLsIIM', '47514DxaoZt', 'split', 'utf8', '361647SuKbDb', '8441270fsRcYK', '42906bqAVAe', '/dev/stdin', '219120CMJCZU', '15msigkZ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x39e5b6;
  };
  return __STRING_ARRAY__();
}
