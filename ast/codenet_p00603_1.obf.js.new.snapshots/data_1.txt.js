var a0_0x56c8e9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3d475c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x3d475c(0x169)) / 0x1 + -parseInt(_0x3d475c(0x17c)) / 0x2 * (parseInt(_0x3d475c(0x172)) / 0x3) + -parseInt(_0x3d475c(0x17d)) / 0x4 * (parseInt(_0x3d475c(0x170)) / 0x5) + -parseInt(_0x3d475c(0x16e)) / 0x6 * (parseInt(_0x3d475c(0x176)) / 0x7) + parseInt(_0x3d475c(0x177)) / 0x8 * (parseInt(_0x3d475c(0x174)) / 0x9) + -parseInt(_0x3d475c(0x166)) / 0xa + -parseInt(_0x3d475c(0x179)) / 0xb * (-parseInt(_0x3d475c(0x17b)) / 0xc);
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
var input = require('fs')[a0_0x56c8e9(0x17e)](a0_0x56c8e9(0x16d), a0_0x56c8e9(0x178));
function __DECODE_0__(mjtUOV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mjtUOV, key);
}
var Arr = input[a0_0x56c8e9(0x168)]()['split']('\x0a');
while (!![]) {
  if (Arr[a0_0x56c8e9(0x16f)] == 0x0) {
    break;
  }
  var nr = Arr[a0_0x56c8e9(0x17a)]()[a0_0x56c8e9(0x171)]('\x20')[a0_0x56c8e9(0x173)](Number);
  var n = nr[0x0];
  var r = nr[0x1];
  var card = [];
  for (var i = 0x0; i < n; i++) {
    card[i] = i;
  }
  var arr = Arr[a0_0x56c8e9(0x17a)]()[a0_0x56c8e9(0x171)]('\x20')['map'](Number);
  for (var i = 0x0; i < r; i++) {
    var v = arr[i];
    var a = [];
    var b = [];
    for (var j = 0x0; j < n; j++) {
      Math[a0_0x56c8e9(0x16c)](n / 0x2) > j ? b[a0_0x56c8e9(0x16b)](card[j]) : a[a0_0x56c8e9(0x16b)](card[j]);
    }
    card = [];
    while (!![]) {
      if (a[a0_0x56c8e9(0x16f)] == 0x0 && b[a0_0x56c8e9(0x16f)] == 0x0) {
        break;
      }
      card = card['concat'](a['splice'](0x0, v));
      card = card[a0_0x56c8e9(0x16a)](b[a0_0x56c8e9(0x175)](0x0, v));
    }
  }
  console[a0_0x56c8e9(0x167)](card[card[a0_0x56c8e9(0x16f)] - 0x1]);
}
