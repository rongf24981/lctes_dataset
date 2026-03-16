(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x160)) / 0x1 + parseInt(__DECODE_0__(0x166)) / 0x2 * (-parseInt(__DECODE_0__(0x161)) / 0x3) + parseInt(__DECODE_0__(0x168)) / 0x4 * (parseInt(__DECODE_0__(0x162)) / 0x5) + -parseInt(__DECODE_0__(0x16a)) / 0x6 + parseInt(__DECODE_0__(0x15c)) / 0x7 + -parseInt(__DECODE_0__(0x15b)) / 0x8 + -parseInt(__DECODE_0__(0x163)) / 0x9 * (-parseInt(__DECODE_0__(0x167)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2c516);
var input = require('fs')[__DECODE_0__(0x159)](__DECODE_0__(0x15e), 'utf8');
var arr = input[__DECODE_0__(0x165)]()[__DECODE_0__(0x164)]('\x0a');
function __STRING_ARRAY__() {
  var _0xe3ff5d = ['0\x200', '2376584UoQaoh', '159523VnyHQp', 'shift', '/dev/stdin', 'forEach', '302436jhpAee', '27630sIfgFR', '215sudNNv', '9dYeAfN', 'split', 'trim', '4TRtsVU', '9084770ULorwl', '2868OaXAZg', 'max', '975852RrxANV', 'log', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xe3ff5d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RcUxil, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RcUxil, key);
}
while (!![]) {
  if (arr[0x0] == __DECODE_0__(0x15a)) {
    break;
  }
  var nm = arr[__DECODE_0__(0x15d)]()[__DECODE_0__(0x164)]('\x20')['map'](Number);
  var point = [];
  for (var i = 0x0; i < nm[0x0]; i++) {
    point[i] = [0x0, 0x0];
  }
  for (var i = 0x0; i < nm[0x1]; i++) {
    var c = arr['shift']()[__DECODE_0__(0x164)]('\x20')['map'](Number);
    var s = c[__DECODE_0__(0x15d)]();
    var k = c[__DECODE_0__(0x15d)]();
    if (k == 0x1) {
      point[c[0x0] - 0x1][0x0] += s;
    }
    c[__DECODE_0__(0x15f)](function (v, i) {
      point[v - 0x1][0x1] += s;
    });
  }
  var max = 0x0;
  for (var i = 0x0; i < nm[0x0]; i++) {
    for (var j = 0x0; j < nm[0x0]; j++) {
      if (i == j) {
        continue;
      }
      max = Math[__DECODE_0__(0x169)](max, point[i][0x1] - point[j][0x0]);
    }
  }
  console[__DECODE_0__(0x16b)](max + 0x1);
}
