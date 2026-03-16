function __DECODE_0__(RlysPo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x137;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RlysPo, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x137)) / 0x1 + -parseInt(__DECODE_0__(0x13a)) / 0x2 + -parseInt(__DECODE_0__(0x13e)) / 0x3 + parseInt(__DECODE_0__(0x142)) / 0x4 + -parseInt(__DECODE_0__(0x13c)) / 0x5 * (-parseInt(__DECODE_0__(0x147)) / 0x6) + parseInt(__DECODE_0__(0x13f)) / 0x7 + -parseInt(__DECODE_0__(0x148)) / 0x8 * (parseInt(__DECODE_0__(0x144)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb435e);
var input = require('fs')['readFileSync'](__DECODE_0__(0x145), __DECODE_0__(0x146));
function __STRING_ARRAY__() {
  var _0x1ceac2 = ['map', '5fFQXMi', 'split', '1991154cDBmDU', '8051946eEjigi', 'length', 'log', '4691960RmVmXk', 'join', '28674qVlDgp', '/dev/stdin', 'utf8', '7377324XsikJH', '3256vZwBgn', '496902gNtLpM', 'push', 'forEach', '2702324yOfApg'];
  __STRING_ARRAY__ = function () {
    return _0x1ceac2;
  };
  return __STRING_ARRAY__();
}
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x13d)]('\x0a');
while (!![]) {
  var n = Arr['shift']() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = Arr['shift']()[__DECODE_0__(0x13d)]('\x20')[__DECODE_0__(0x13b)](Number);
  var x = arr[0x0];
  var ans = [[x]];
  for (var i = 0x1; i < n; i++) {
    if (x + 0x1 == arr[i]) {
      ans[ans['length'] - 0x1][__DECODE_0__(0x138)](arr[i]);
    } else {
      ans[__DECODE_0__(0x138)]([arr[i]]);
    }
    x = arr[i];
  }
  ans[__DECODE_0__(0x139)](function (v, i) {
    if (v[__DECODE_0__(0x140)] !== 0x1) {
      ans[i] = v[0x0] + '-' + v[v[__DECODE_0__(0x140)] - 0x1];
    } else {
      ans[i] = v[0x0];
    }
  });
  console[__DECODE_0__(0x141)](ans[__DECODE_0__(0x143)]('\x20'));
}
