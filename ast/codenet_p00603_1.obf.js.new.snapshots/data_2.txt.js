(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x169)) / 0x1 + -parseInt(__DECODE_0__(0x17c)) / 0x2 * (parseInt(__DECODE_0__(0x172)) / 0x3) + -parseInt(__DECODE_0__(0x17d)) / 0x4 * (parseInt(__DECODE_0__(0x170)) / 0x5) + -parseInt(__DECODE_0__(0x16e)) / 0x6 * (parseInt(__DECODE_0__(0x176)) / 0x7) + parseInt(__DECODE_0__(0x177)) / 0x8 * (parseInt(__DECODE_0__(0x174)) / 0x9) + -parseInt(__DECODE_0__(0x166)) / 0xa + -parseInt(__DECODE_0__(0x179)) / 0xb * (-parseInt(__DECODE_0__(0x17b)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82da6);
function __STRING_ARRAY__() {
  var _0x119e41 = ['24582yETGWw', 'map', '9oGsskm', 'splice', '566573BAVHhm', '4729040TGNwAT', 'utf8', '10649144CRnKUj', 'shift', '12yAUaPv', '70uhYtoA', '2825612xYsDyB', 'readFileSync', '8891140pILFgy', 'log', 'trim', '939986PvqbAw', 'concat', 'push', 'floor', '/dev/stdin', '6rFhqvs', 'length', '5yXMpMs', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x119e41;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x17e)](__DECODE_0__(0x16d), __DECODE_0__(0x178));
function __DECODE_0__(mjtUOV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mjtUOV, key);
}
var Arr = input[__DECODE_0__(0x168)]()['split']('\x0a');
while (!![]) {
  if (Arr[__DECODE_0__(0x16f)] == 0x0) {
    break;
  }
  var nr = Arr[__DECODE_0__(0x17a)]()[__DECODE_0__(0x171)]('\x20')[__DECODE_0__(0x173)](Number);
  var n = nr[0x0];
  var r = nr[0x1];
  var card = [];
  for (var i = 0x0; i < n; i++) {
    card[i] = i;
  }
  var arr = Arr[__DECODE_0__(0x17a)]()[__DECODE_0__(0x171)]('\x20')['map'](Number);
  for (var i = 0x0; i < r; i++) {
    var v = arr[i];
    var a = [];
    var b = [];
    for (var j = 0x0; j < n; j++) {
      Math[__DECODE_0__(0x16c)](n / 0x2) > j ? b[__DECODE_0__(0x16b)](card[j]) : a[__DECODE_0__(0x16b)](card[j]);
    }
    card = [];
    while (!![]) {
      if (a[__DECODE_0__(0x16f)] == 0x0 && b[__DECODE_0__(0x16f)] == 0x0) {
        break;
      }
      card = card['concat'](a['splice'](0x0, v));
      card = card[__DECODE_0__(0x16a)](b[__DECODE_0__(0x175)](0x0, v));
    }
  }
  console[__DECODE_0__(0x167)](card[card[__DECODE_0__(0x16f)] - 0x1]);
}
