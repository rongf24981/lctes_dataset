function __DECODE_0__(LMyWym, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LMyWym, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1c6)) / 0x1 + parseInt(__DECODE_0__(0x1ce)) / 0x2 + -parseInt(__DECODE_0__(0x1c7)) / 0x3 + parseInt(__DECODE_0__(0x1c8)) / 0x4 + parseInt(__DECODE_0__(0x1d6)) / 0x5 * (parseInt(__DECODE_0__(0x1d2)) / 0x6) + parseInt(__DECODE_0__(0x1cd)) / 0x7 * (parseInt(__DECODE_0__(0x1ca)) / 0x8) + -parseInt(__DECODE_0__(0x1d5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9feda);
function __STRING_ARRAY__() {
  var _0x3e0b7a = ['1704580xZowXf', '929067ozBGxU', '2117415tegSQO', '2009808zPGJuW', 'log', '334864yIKHCn', 'shift', 'trim', '203akpZBe', '1598974mcYLkw', 'utf8', 'sqrt', '/dev/stdin', '18bqGwVz', 'map', 'split', '27960885VnXJgc'];
  __STRING_ARRAY__ = function () {
    return _0x3e0b7a;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x1d1), __DECODE_0__(0x1cf));
var Arr = input[__DECODE_0__(0x1cc)]()['split']('\x0a');
while (!![]) {
  var arr = Arr[__DECODE_0__(0x1cb)]()[__DECODE_0__(0x1d4)]('\x20')[__DECODE_0__(0x1d3)](Number);
  if (arr[0x0] == 0x0 && arr[0x1] == 0x0 && arr[0x2] == 0x0) {
    break;
  }
  arr['sort'](function (a, b) {
    return a - b;
  });
  var R = Math[__DECODE_0__(0x1d0)](arr[0x0] * arr[0x0] + arr[0x1] * arr[0x1]);
  var n = Arr[__DECODE_0__(0x1cb)]() - 0x0;
  for (var i = 0x0; i < n; i++) {
    var r = Arr['shift']() - 0x0;
    console[__DECODE_0__(0x1c9)](r * 0x2 > R ? 'OK' : 'NA');
  }
}
