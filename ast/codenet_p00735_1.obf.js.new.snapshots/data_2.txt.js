function __DECODE_0__(TorMWV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x89;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TorMWV, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x8f)) / 0x1 + -parseInt(__DECODE_0__(0x97)) / 0x2 * (-parseInt(__DECODE_0__(0x99)) / 0x3) + -parseInt(__DECODE_0__(0x98)) / 0x4 + parseInt(__DECODE_0__(0x8b)) / 0x5 * (-parseInt(__DECODE_0__(0x92)) / 0x6) + parseInt(__DECODE_0__(0x8e)) / 0x7 + parseInt(__DECODE_0__(0x96)) / 0x8 + -parseInt(__DECODE_0__(0x89)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e163);
var ms = [];
var flag = [];
for (var i = 0x0; i < 0x493e0; i++) {
  flag[i] = !![];
}
var i = 0x1;
while (!![]) {
  var m = 0x7 * i - 0x1;
  var s = 0x7 * i + 0x1;
  if (m > 0x493e0) {
    break;
  }
  i++;
  if (flag[m]) {
    ms['push'](m);
  }
  if (flag[s]) {
    ms[__DECODE_0__(0x8c)](s);
  }
  var j = 0x2;
  while (!![]) {
    if (m * j > 0x493e0) {
      break;
    }
    flag[m * j] = ![];
    flag[s * j] = ![];
    j++;
  }
}
function __STRING_ARRAY__() {
  var _0x22ab66 = ['some', 'shift', 'trim', '6316728HlkXWt', '2ClsGim', '355132KVPclg', '936855uwDwRn', '897831qeYxmt', 'join', '98830aVAWlk', 'push', 'readFileSync', '3559325TyLbEa', '608868yMzCWo', '/dev/stdin', 'utf8', '90YZswhW'];
  __STRING_ARRAY__ = function () {
    return _0x22ab66;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x8d)](__DECODE_0__(0x90), __DECODE_0__(0x91));
var arr = input[__DECODE_0__(0x95)]()['split']('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x94)]() - 0x0;
  if (n == 0x1) {
    break;
  }
  var ans = [];
  var i = 0x0;
  ms[__DECODE_0__(0x93)](function (v) {
    if (n % v == 0x0) {
      ans[__DECODE_0__(0x8c)](v);
    }
    return n < v;
  });
  console['log'](n + ':\x20' + ans[__DECODE_0__(0x8a)]('\x20'));
}
