var a0_0x3a7c21 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x31c599 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x31c599(0x13a)) / 0x1 + parseInt(_0x31c599(0x134)) / 0x2 + parseInt(_0x31c599(0x13c)) / 0x3 * (-parseInt(_0x31c599(0x12c)) / 0x4) + parseInt(_0x31c599(0x12d)) / 0x5 * (-parseInt(_0x31c599(0x12f)) / 0x6) + -parseInt(_0x31c599(0x133)) / 0x7 + parseInt(_0x31c599(0x137)) / 0x8 * (parseInt(_0x31c599(0x135)) / 0x9) + parseInt(_0x31c599(0x138)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcb0c3);
var input = require('fs')[a0_0x3a7c21(0x139)]('/dev/stdin', a0_0x3a7c21(0x136));
var lines = input[a0_0x3a7c21(0x132)]('\x0a');
function __STRING_ARRAY__() {
  var _0x2d2814 = ['split', '5786004YhMGcx', '2366562QDpJKx', '57924oZyiUe', 'utf8', '1504vqJSEB', '6222160LttzMl', 'readFileSync', '489686TAjcQi', 'map', '364053MAiShC', '28zASbcH', '145QIFJGM', 'log', '3738HEsWKd', 'indexOf', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x2d2814;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HtaYwI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HtaYwI, key);
}
var imagine;
while (imagine = lines[a0_0x3a7c21(0x131)]()) {
  var guess = lines[a0_0x3a7c21(0x131)]();
  var a = imagine['split']('\x20')[a0_0x3a7c21(0x13b)](function (n) {
    return +n;
  });
  var b = guess[a0_0x3a7c21(0x132)]('\x20')[a0_0x3a7c21(0x13b)](function (n) {
    return +n;
  });
  var hit = 0x0;
  for (var i = 0x0; i < 0x4; i++) {
    if (a[i] == b[i]) {
      hit++;
    }
  }
  var blow = 0x0;
  for (var i = 0x0; i < 0x4; i++) {
    if (a[a0_0x3a7c21(0x130)](b[i]) >= 0x0) {
      blow++;
    }
  }
  blow -= hit;
  console[a0_0x3a7c21(0x12e)](hit + '\x20' + blow);
}
