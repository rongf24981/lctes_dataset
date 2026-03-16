(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x196)) / 0x1 * (-parseInt(__DECODE_0__(0x191)) / 0x2) + -parseInt(__DECODE_0__(0x194)) / 0x3 + -parseInt(__DECODE_0__(0x195)) / 0x4 * (-parseInt(__DECODE_0__(0x19a)) / 0x5) + -parseInt(__DECODE_0__(0x198)) / 0x6 + -parseInt(__DECODE_0__(0x197)) / 0x7 * (-parseInt(__DECODE_0__(0x190)) / 0x8) + -parseInt(__DECODE_0__(0x1a0)) / 0x9 + -parseInt(__DECODE_0__(0x1a2)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4fdba);
let input = require('fs')['readFileSync'](__DECODE_0__(0x1a1), __DECODE_0__(0x1a3));
function __STRING_ARRAY__() {
  var _0x5f420e = ['4jixKUE', '1259YXFYOg', '903elbWhK', '354156FFEvJn', 'split', '3064315jNkQKt', 'sort', 'next', 'trim', 'log', 'value', '4137687cbgLtq', '/dev/stdin', '4251030QRrjPb', 'utf8', 'map', 'abs', '23944HdgKRq', '908ZALFBZ', 'shift', 'set', '898728DWuUqv'];
  __STRING_ARRAY__ = function () {
    return _0x5f420e;
  };
  return __STRING_ARRAY__();
}
let Arr = input[__DECODE_0__(0x19d)]()['split']('\x0a');
function __DECODE_0__(wZdjcY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wZdjcY, key);
}
let bmis = new Map();
while (0x1) {
  let n = Arr[0x0];
  if (n == 0x0) {
    break;
  }
  Arr[__DECODE_0__(0x192)]();
  for (var i = 0x0; i < n; ++i) {
    var nums = Arr[0x0][__DECODE_0__(0x199)]('\x20')[__DECODE_0__(0x18e)](Number);
    var m = nums[0x1] / 0x64;
    var bmi = nums[0x2] / (m * m);
    var dif = Math[__DECODE_0__(0x18f)](0x16 - bmi);
    bmis[__DECODE_0__(0x193)](nums[0x0]['toString'](), dif);
    Arr[__DECODE_0__(0x192)]();
  }
  let sorted = new Map([...bmis['entries']()][__DECODE_0__(0x19b)]((a, b) => a[0x1] - b[0x1]));
  console[__DECODE_0__(0x19e)](sorted['keys']()[__DECODE_0__(0x19c)]()[__DECODE_0__(0x19f)]);
}
