(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x115)) / 0x1 * (-parseInt(__DECODE_0__(0x116)) / 0x2) + -parseInt(__DECODE_0__(0x108)) / 0x3 * (parseInt(__DECODE_0__(0x117)) / 0x4) + parseInt(__DECODE_0__(0x111)) / 0x5 + -parseInt(__DECODE_0__(0x109)) / 0x6 + parseInt(__DECODE_0__(0x10a)) / 0x7 + -parseInt(__DECODE_0__(0x112)) / 0x8 + parseInt(__DECODE_0__(0x110)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xab194);
var input = require('fs')[__DECODE_0__(0x118)](__DECODE_0__(0x114), __DECODE_0__(0x10f));
var arr = input[__DECODE_0__(0x10d)]()[__DECODE_0__(0x106)]('\x0a');
var nf = arr[__DECODE_0__(0x10c)]()[__DECODE_0__(0x106)]('\x20')[__DECODE_0__(0x119)](Number);
var f = nf[0x1];
function __STRING_ARRAY__() {
  var _0x2b2457 = ['/dev/stdin', '61myAOFF', '35486WBpSxL', '4WazSnc', 'readFileSync', 'map', 'split', 'length', '4013394ehmjtQ', '7197744VmLdwF', '4686850AROHEb', 'sort', 'shift', 'trim', 'log', 'utf8', '15341400vVStDE', '4695720Hzauch', '9259000fSqFiQ', 'forEach'];
  __STRING_ARRAY__ = function () {
    return _0x2b2457;
  };
  return __STRING_ARRAY__();
}
var obj = {};
arr = arr[__DECODE_0__(0x119)](function (v) {
  v = v['split']('\x20');
  v['shift']();
  v[__DECODE_0__(0x113)](function (V) {
    obj[V] = {};
  });
  return v;
});
for (var k in obj) {
  for (var K in obj) {
    obj[k][K] = 0x0;
  }
}
arr[__DECODE_0__(0x113)](function (v) {
  for (var i = 0x0; i < v['length']; i++) {
    for (var j = 0x0; j < v[__DECODE_0__(0x107)]; j++) {
      obj[v[i]][v[j]]++;
    }
  }
});
var ans = [];
for (var k in obj) {
  for (var K in obj) {
    obj[K][k] = 0x0;
    if (obj[k][K] >= f) {
      ans['push']([k, K][__DECODE_0__(0x10b)]()['join']('\x20'));
    }
  }
}
ans[__DECODE_0__(0x10b)]();
console[__DECODE_0__(0x10e)](ans[__DECODE_0__(0x107)]);
function __DECODE_0__(toHCqW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x106;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(toHCqW, key);
}
if (ans[__DECODE_0__(0x107)] != 0x0) {
  console[__DECODE_0__(0x10e)](ans['join']('\x0a'));
}
