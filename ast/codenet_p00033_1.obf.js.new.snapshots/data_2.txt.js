(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9d)) / 0x1 * (parseInt(__DECODE_0__(0x8f)) / 0x2) + -parseInt(__DECODE_0__(0x9b)) / 0x3 * (-parseInt(__DECODE_0__(0x92)) / 0x4) + -parseInt(__DECODE_0__(0x91)) / 0x5 + parseInt(__DECODE_0__(0x90)) / 0x6 + parseInt(__DECODE_0__(0x8d)) / 0x7 + parseInt(__DECODE_0__(0x9c)) / 0x8 + -parseInt(__DECODE_0__(0x97)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1ee67);
function __DECODE_0__(gPgKrN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gPgKrN, key);
}
(function (input) {
  var p = input['replace'](/\n$/, '')['split']('\x0a');
  var n = Number(p[__DECODE_0__(0x95)]());
  for (var i = 0x0; i < n; i++) {
    var a = p[__DECODE_0__(0x95)]()[__DECODE_0__(0x98)]('\x20')[__DECODE_0__(0x99)](Number);
    console[__DECODE_0__(0x93)](order(a));
  }
})(require('fs')[__DECODE_0__(0x8e)](__DECODE_0__(0x9a), __DECODE_0__(0x9e)));
function __STRING_ARRAY__() {
  var _0x3339d3 = ['1214920VZNjCB', '48cwjYdE', 'log', 'YES', 'shift', 'push', '261270KeIKzG', 'split', 'map', '/dev/stdin', '10587POJFQW', '1830424KFMZfO', '145961ZlFfel', 'utf8', '216216DfhQWw', 'readFileSync', '2vNfONU', '1455018EgFQwN'];
  __STRING_ARRAY__ = function () {
    return _0x3339d3;
  };
  return __STRING_ARRAY__();
}
function order(a) {
  var r = [];
  var x;
  var c = a[__DECODE_0__(0x95)]();
  while (x = a[__DECODE_0__(0x95)]()) {
    if (x > c) {
      c = x;
      continue;
    }
    r[__DECODE_0__(0x96)](x);
  }
  var m = -Infinity;
  while (x = r['shift']()) {
    if (x > m) {
      m = x;
      continue;
    }
    return 'NO';
  }
  return __DECODE_0__(0x94);
}
