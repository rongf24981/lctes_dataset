(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa6)) / 0x1 * (-parseInt(__DECODE_0__(0xaa)) / 0x2) + -parseInt(__DECODE_0__(0xa7)) / 0x3 * (parseInt(__DECODE_0__(0xb1)) / 0x4) + -parseInt(__DECODE_0__(0xa2)) / 0x5 * (-parseInt(__DECODE_0__(0xab)) / 0x6) + -parseInt(__DECODE_0__(0xa1)) / 0x7 * (-parseInt(__DECODE_0__(0xa3)) / 0x8) + parseInt(__DECODE_0__(0xac)) / 0x9 * (parseInt(__DECODE_0__(0xa4)) / 0xa) + parseInt(__DECODE_0__(0xad)) / 0xb + parseInt(__DECODE_0__(0xae)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xccf0b);
var input = require('fs')['readFileSync'](__DECODE_0__(0xaf), 'utf8');
var Arr = input[__DECODE_0__(0xa8)]()['split']('\x0a');
var NKTUVL = Arr[__DECODE_0__(0xb0)]()['split']('\x20')[__DECODE_0__(0xa0)](Number);
var N = NKTUVL[0x0];
var K = NKTUVL[0x1];
function __STRING_ARRAY__() {
  var _0x53c72a = ['4PPaLol', 'log', 'map', '1099vZMqIN', '180ahqCgO', '54888OpdFMC', '1370DKjjDg', 'hasOwnProperty', '1daQRpe', '3170721TJuwyh', 'trim', 'toFixed', '1885382aPuNgR', '171222PnuRoH', '44046XCatEA', '427911Knzlxz', '301740rYSnaE', '/dev/stdin', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x53c72a;
  };
  return __STRING_ARRAY__();
}
var T = NKTUVL[0x2];
var U = NKTUVL[0x3];
var V = NKTUVL[0x4];
var L = NKTUVL[0x5];
function __DECODE_0__(GsReHH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GsReHH, key);
}
var time = 0x0;
var obj = {};
for (var i = 0x0; i < N; i++) {
  obj[Arr['shift']() - 0x0] = !![];
}
var fast = 0x0;
var stock = 0x0;
for (var i = 0x0; i < L; i++) {
  var now = obj[__DECODE_0__(0xa5)](i) ? !![] : ![];
  if (fast == 0x0 && now == !![]) {
    time += 0x1 / V;
    fast = T * V - 0x1;
    continue;
  }
  if (fast == 0x0 && now == ![] && stock == 0x0) {
    time += 0x1 / U;
    continue;
  }
  if (fast == 0x0 && now == ![] && stock > 0x0) {
    time += 0x1 / V;
    fast = T * V - 0x1;
    stock--;
    continue;
  }
  if (fast > 0x0 && now == ![]) {
    time += 0x1 / V;
    fast--;
    continue;
  }
  if (fast > 0x0 && now == !![] && stock + 0x1 <= K) {
    time += 0x1 / V;
    fast--;
    stock++;
    continue;
  }
  if (fast > 0x0 && now == !![] && stock + 0x1 > K) {
    time += 0x1 / V;
    fast = T * V - 0x1;
    continue;
  }
}
console[__DECODE_0__(0x9f)](time[__DECODE_0__(0xa9)](0x9));
