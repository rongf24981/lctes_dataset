(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d5)) / 0x1 * (-parseInt(__DECODE_0__(0x1ca)) / 0x2) + parseInt(__DECODE_0__(0x1c3)) / 0x3 * (parseInt(__DECODE_0__(0x1cb)) / 0x4) + parseInt(__DECODE_0__(0x1d4)) / 0x5 + -parseInt(__DECODE_0__(0x1cf)) / 0x6 * (parseInt(__DECODE_0__(0x1d1)) / 0x7) + -parseInt(__DECODE_0__(0x1c5)) / 0x8 + parseInt(__DECODE_0__(0x1cd)) / 0x9 + parseInt(__DECODE_0__(0x1c2)) / 0xa * (-parseInt(__DECODE_0__(0x1d3)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3f66e);
function __DECODE_0__(vmGNZm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vmGNZm, key);
}
function over(x) {
  if (x >= 0xa) {
    x = x - 0xa + 0x1;
  }
  return x;
}
function __STRING_ARRAY__() {
  var _0xa8080b = ['trim', 'log', 'utf8', '10huhvZk', '24lWWYdl', 'split', '189045CfirIh', 'length', '42dIDbzx', '/dev/stdin', '227983IgjeGp', 'push', '20174qpzYbH', '1112025WfLJFB', '78347iGOHtZ', 'readFileSync', '1060LAQPPD', '24822tIQOBO', 'map', '21664OZQIPC', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0xa8080b;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1c1)](__DECODE_0__(0x1d0), __DECODE_0__(0x1c9));
var arr = input[__DECODE_0__(0x1c7)]()[__DECODE_0__(0x1cc)]('\x0a');
var n = arr[__DECODE_0__(0x1c6)]() - 0x0;
var id = arr[__DECODE_0__(0x1c6)]()[__DECODE_0__(0x1cc)]('');
var a = arr['shift']() - 0x0;
var ary = arr['shift']()['split']('\x20')[__DECODE_0__(0x1c4)](Number);
var k = [];
var sum = 0x0;
id['forEach'](function (v, i) {
  if (v == '*') {
    if (i % 0x2 == 0x0) {
      k[__DECODE_0__(0x1d2)](0x1);
    } else {
      k[__DECODE_0__(0x1d2)](0x2);
    }
  } else {
    if (i % 0x2 == 0x0) {
      sum += v - 0x0;
    } else {
      sum += over((v - 0x0) * 0x2);
    }
  }
});
var dp = [];
for (var i = 0x0; i <= 0x7; i++) {
  dp[i] = [];
  for (var s = 0x0; s < 0xf4240; s++) {
    dp[i][s] = ![];
  }
}
dp[0x0][sum] = 0x1;
for (var i = 0x0; i < k['length']; i++) {
  for (var j = 0x0; j < ary[__DECODE_0__(0x1ce)]; j++) {
    for (var s = 0x0; s < 0xf4240; s++) {
      dp[i + 0x1][s + over(ary[j] * k[i])] += dp[i][s];
    }
  }
}
var ans = 0x0;
for (var s = 0x0; s < 0x186a0; s++) {
  ans += dp[k[__DECODE_0__(0x1ce)]][s * 0xa];
}
console[__DECODE_0__(0x1c8)](ans);
