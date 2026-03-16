function __STRING_ARRAY__() {
  var _0x475a0c = ['length', '7HVzAHB', '460574wLPfDN', 'shift', 'map', 'utf8', '7819119aByJAO', '1415928haimAV', '2299860REdMZc', '2290czWgKg', 'push', 'trim', '2312KETeoS', '634359Pbuesb', '2971776HtMjen', 'every', 'log', '/dev/stdin', 'filter'];
  __STRING_ARRAY__ = function () {
    return _0x475a0c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1c1)) / 0x1 + parseInt(__DECODE_0__(0x1c9)) / 0x2 + -parseInt(__DECODE_0__(0x1bc)) / 0x3 + parseInt(__DECODE_0__(0x1c0)) / 0x4 * (-parseInt(__DECODE_0__(0x1bd)) / 0x5) + parseInt(__DECODE_0__(0x1c2)) / 0x6 * (-parseInt(__DECODE_0__(0x1c8)) / 0x7) + parseInt(__DECODE_0__(0x1bb)) / 0x8 + parseInt(__DECODE_0__(0x1ba)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5db2c);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1c5), __DECODE_0__(0x1b9));
function __DECODE_0__(NiPSHj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NiPSHj, key);
}
var Arr = input[__DECODE_0__(0x1bf)]()['split']('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x1ca)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0x1ca)]()['split']('\x20')[__DECODE_0__(0x1b8)](Number);
  var cnt = 0x0;
  while (!![]) {
    var flag = arr[__DECODE_0__(0x1c3)](function (v, i) {
      return i + 0x1 == v;
    });
    if (flag) {
      break;
    }
    var L = arr[__DECODE_0__(0x1c7)];
    arr = arr[__DECODE_0__(0x1b8)](function (v) {
      return v - 0x1;
    });
    arr = arr[__DECODE_0__(0x1c6)](function (v) {
      return v != 0x0;
    });
    arr[__DECODE_0__(0x1be)](L);
    cnt++;
    if (cnt == 0x2710) {
      cnt = -0x1;
      break;
    }
  }
  console[__DECODE_0__(0x1c4)](cnt);
}
