function __STRING_ARRAY__() {
  var _0x2b736a = ['1500433kqkMHT', 'keys', '350152QETgHb', '6KomUub', 'test', 'max', 'log', '9bFziOd', 'utf8', '5QOSQhX', 'split', '139727LPEBhq', 'length', '4014832ExdxrP', 'forEach', '4493550NVCPbV', '768020BDIbMI', 'slice', '77466oeEJNw', '48cGsWKL', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x2b736a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x14a)) / 0x1 + parseInt(__DECODE_0__(0x145)) / 0x2 * (-parseInt(__DECODE_0__(0x146)) / 0x3) + parseInt(__DECODE_0__(0x143)) / 0x4 * (parseInt(__DECODE_0__(0x13c)) / 0x5) + parseInt(__DECODE_0__(0x14b)) / 0x6 * (parseInt(__DECODE_0__(0x13e)) / 0x7) + -parseInt(__DECODE_0__(0x140)) / 0x8 * (-parseInt(__DECODE_0__(0x14f)) / 0x9) + parseInt(__DECODE_0__(0x142)) / 0xa + parseInt(__DECODE_0__(0x148)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x507e2);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x13b));
var arr = input['trim']()[__DECODE_0__(0x13d)]('\x0a');
function __DECODE_0__(liQwSr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liQwSr, key);
}
while (!![]) {
  var n = arr[__DECODE_0__(0x147)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var Arr = arr['splice'](0x0, n);
  var obj = {};
  var max = 0x0;
  Arr[__DECODE_0__(0x141)](function (v) {
    var str = v;
    var s = str[0x0];
    var flag = ![];
    for (var i = 0x0; i < str[__DECODE_0__(0x13f)]; i++) {
      if (flag) {
        s += str[i];
      }
      flag = /[aiueo]/[__DECODE_0__(0x14c)](str[i]) ? !![] : ![];
    }
    obj[s] = !![];
    max = Math[__DECODE_0__(0x14d)](max, s[__DECODE_0__(0x13f)]);
  });
  for (var i = 0x1; i <= max; i++) {
    var Obj = {};
    for (var key in obj) {
      Obj[key[__DECODE_0__(0x144)](0x0, i)] = !![];
    }
    if (Object[__DECODE_0__(0x149)](Obj)[__DECODE_0__(0x13f)] == n) {
      console[__DECODE_0__(0x14e)](i);
      break;
    }
    if (i == max) {
      console[__DECODE_0__(0x14e)](-0x1);
    }
  }
}
