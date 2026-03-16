(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x194)) / 0x1 + -parseInt(__DECODE_0__(0x18b)) / 0x2 * (parseInt(__DECODE_0__(0x188)) / 0x3) + parseInt(__DECODE_0__(0x18e)) / 0x4 * (-parseInt(__DECODE_0__(0x18a)) / 0x5) + parseInt(__DECODE_0__(0x19a)) / 0x6 * (parseInt(__DECODE_0__(0x192)) / 0x7) + -parseInt(__DECODE_0__(0x18d)) / 0x8 * (-parseInt(__DECODE_0__(0x195)) / 0x9) + -parseInt(__DECODE_0__(0x19b)) / 0xa * (parseInt(__DECODE_0__(0x193)) / 0xb) + parseInt(__DECODE_0__(0x18c)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x456fe);
function __STRING_ARRAY__() {
  var _0x33eb56 = ['pow', '262326ihAHIS', '10OtBpgw', 'toFixed', 'map', '6uFCBWU', 'split', '255tJcptV', '343294vEIhOJ', '14599308HchYFG', '173064ZQYEJX', '23884tyTIWN', '/dev/stdin', 'sqrt', 'length', '7tbkHQY', '2407559ITigYp', '260663aonjHp', '63aBcVlQ', 'utf8', 'shift', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x33eb56;
  };
  return __STRING_ARRAY__();
}
function heron(a, b, c) {
  var s = (a + b + c) / 0x2;
  var S = Math[__DECODE_0__(0x190)](s * (s - a) * (s - b) * (s - c));
  return S;
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x18f), __DECODE_0__(0x196));
var Arr = input['trim']()[__DECODE_0__(0x189)]('\x0a');
var xy1 = Arr[__DECODE_0__(0x197)]()[__DECODE_0__(0x189)](',')[__DECODE_0__(0x19d)](Number);
var xy2 = Arr['shift']()[__DECODE_0__(0x189)](',')['map'](Number);
var x1 = xy1[0x0];
function __DECODE_0__(yMGwVy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x188;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yMGwVy, key);
}
var y1 = xy1[0x1];
var x2 = xy2[0x0];
var y2 = xy2[0x1];
var sum = 0x0;
for (var I = 0x0; I < Arr[__DECODE_0__(0x191)]; I++) {
  var xy3 = Arr[I][__DECODE_0__(0x189)](',')[__DECODE_0__(0x19d)](Number);
  var x3 = xy3[0x0];
  var y3 = xy3[0x1];
  var d12 = Math[__DECODE_0__(0x190)](Math[__DECODE_0__(0x199)](x1 - x2, 0x2) + Math[__DECODE_0__(0x199)](y1 - y2, 0x2));
  var d13 = Math[__DECODE_0__(0x190)](Math[__DECODE_0__(0x199)](x1 - x3, 0x2) + Math[__DECODE_0__(0x199)](y1 - y3, 0x2));
  var d23 = Math[__DECODE_0__(0x190)](Math[__DECODE_0__(0x199)](x2 - x3, 0x2) + Math[__DECODE_0__(0x199)](y2 - y3, 0x2));
  sum += heron(d12, d13, d23);
  x2 = xy3[0x0];
  y2 = xy3[0x1];
}
console[__DECODE_0__(0x198)](sum[__DECODE_0__(0x19c)](0x6));
