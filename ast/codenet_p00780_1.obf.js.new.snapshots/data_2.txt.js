(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x168)) / 0x1 * (-parseInt(__DECODE_0__(0x166)) / 0x2) + -parseInt(__DECODE_0__(0x176)) / 0x3 + -parseInt(__DECODE_0__(0x171)) / 0x4 + parseInt(__DECODE_0__(0x172)) / 0x5 + parseInt(__DECODE_0__(0x170)) / 0x6 + -parseInt(__DECODE_0__(0x167)) / 0x7 * (-parseInt(__DECODE_0__(0x16a)) / 0x8) + -parseInt(__DECODE_0__(0x169)) / 0x9 * (-parseInt(__DECODE_0__(0x16d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcf399);
function prime(max) {
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math['floor'](Math[__DECODE_0__(0x175)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[__DECODE_0__(0x177)](arr[i]);
    }
  }
  return result;
}
function __STRING_ARRAY__() {
  var _0x19edc0 = ['length', '/dev/stdin', '487248sMWFcH', '6564768AmTyVa', '3313145jjmfwo', 'trim', 'readFileSync', 'sqrt', '2645187GfMHWf', 'push', 'shift', 'split', '17788IkLeHu', '119xNVJGL', '39EtttuA', '9XxrlWG', '534840WlDrgH', 'log', 'utf8', '11444760PSPeml'];
  __STRING_ARRAY__ = function () {
    return _0x19edc0;
  };
  return __STRING_ARRAY__();
}
var p = prime(0xc350);
function __DECODE_0__(tSiNob, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x165;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tSiNob, key);
}
var input = require('fs')[__DECODE_0__(0x174)](__DECODE_0__(0x16f), __DECODE_0__(0x16c));
var Arr = input[__DECODE_0__(0x173)]()[__DECODE_0__(0x165)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x178)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var cnt = 0x0;
  var k = p[__DECODE_0__(0x16e)] - 0x1;
  for (var i = 0x0; i < p['length']; i++) {
    while (p[i] + p[k] > n) {
      k--;
    }
    if (k < i) {
      break;
    }
    if (p[i] + p[k] == n) {
      cnt++;
    }
  }
  console[__DECODE_0__(0x16b)](cnt);
}
