(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a2)) / 0x1 + parseInt(__DECODE_0__(0x194)) / 0x2 * (parseInt(__DECODE_0__(0x1a7)) / 0x3) + -parseInt(__DECODE_0__(0x193)) / 0x4 * (parseInt(__DECODE_0__(0x1a9)) / 0x5) + parseInt(__DECODE_0__(0x19a)) / 0x6 + parseInt(__DECODE_0__(0x1a5)) / 0x7 * (parseInt(__DECODE_0__(0x1a4)) / 0x8) + parseInt(__DECODE_0__(0x195)) / 0x9 * (-parseInt(__DECODE_0__(0x19b)) / 0xa) + -parseInt(__DECODE_0__(0x199)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5a733);
var input = require('fs')[__DECODE_0__(0x1a6)](__DECODE_0__(0x19e), __DECODE_0__(0x19c));
var Arr = input[__DECODE_0__(0x198)]()[__DECODE_0__(0x1a0)]('\x0a');
var abc = [[], [], []];
var obj = {};
function __DECODE_0__(xOpXHb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x193;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xOpXHb, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0x19d)]; i++) {
  var arr = Arr[i][__DECODE_0__(0x1a0)]('\x20')[__DECODE_0__(0x1a1)](Number);
  abc[Math[__DECODE_0__(0x1a8)](i / 0x8)]['push'](arr[0x1]);
  obj[arr[0x1]] = arr[0x0];
}
for (var i = 0x0; i < 0x3; i++) {
  abc[i][__DECODE_0__(0x197)](function (a, b) {
    return a - b;
  });
}
function __STRING_ARRAY__() {
  var _0x169597 = ['push', 'sort', 'trim', '10480745lYASKJ', '3655422XZVmio', '1420OgUseX', 'utf8', 'length', '/dev/stdin', 'log', 'split', 'map', '97319CbNoyF', 'toFixed', '5730664XonaXy', '7CLWQQG', 'readFileSync', '373362aWdcfB', 'floor', '5RZGjDi', '93532FaJkef', '4rLbnaZ', '8271uVUKSF'];
  __STRING_ARRAY__ = function () {
    return _0x169597;
  };
  return __STRING_ARRAY__();
}
console['log'](obj[abc[0x0][0x0]] + '\x20' + abc[0x0][0x0]['toFixed'](0x2));
console['log'](obj[abc[0x0][0x1]] + '\x20' + abc[0x0][0x1][__DECODE_0__(0x1a3)](0x2));
console[__DECODE_0__(0x19f)](obj[abc[0x1][0x0]] + '\x20' + abc[0x1][0x0][__DECODE_0__(0x1a3)](0x2));
console['log'](obj[abc[0x1][0x1]] + '\x20' + abc[0x1][0x1][__DECODE_0__(0x1a3)](0x2));
console[__DECODE_0__(0x19f)](obj[abc[0x2][0x0]] + '\x20' + abc[0x2][0x0][__DECODE_0__(0x1a3)](0x2));
console[__DECODE_0__(0x19f)](obj[abc[0x2][0x1]] + '\x20' + abc[0x2][0x1][__DECODE_0__(0x1a3)](0x2));
var d = [];
for (var i = 0x0; i < 0x3; i++) {
  d[__DECODE_0__(0x196)](abc[i][0x2]);
}
d[__DECODE_0__(0x197)](function (a, b) {
  return a - b;
});
console[__DECODE_0__(0x19f)](obj[d[0x0]] + '\x20' + d[0x0]['toFixed'](0x2));
console[__DECODE_0__(0x19f)](obj[d[0x1]] + '\x20' + d[0x1][__DECODE_0__(0x1a3)](0x2));
