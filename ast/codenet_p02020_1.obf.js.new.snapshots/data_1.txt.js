var a0_0x12ba69 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xf0bb85 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0xf0bb85(0x1eb)) / 0x1 + -parseInt(_0xf0bb85(0x1e1)) / 0x2 * (parseInt(_0xf0bb85(0x1dc)) / 0x3) + -parseInt(_0xf0bb85(0x1de)) / 0x4 + -parseInt(_0xf0bb85(0x1e8)) / 0x5 * (parseInt(_0xf0bb85(0x1ea)) / 0x6) + -parseInt(_0xf0bb85(0x1d6)) / 0x7 * (parseInt(_0xf0bb85(0x1e0)) / 0x8) + parseInt(_0xf0bb85(0x1e4)) / 0x9 * (parseInt(_0xf0bb85(0x1d9)) / 0xa) + -parseInt(_0xf0bb85(0x1e3)) / 0xb * (-parseInt(_0xf0bb85(0x1e9)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x427a3);
var input = require('fs')[a0_0x12ba69(0x1df)](a0_0x12ba69(0x1d8), a0_0x12ba69(0x1e7));
function __DECODE_0__(hXLwaT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hXLwaT, key);
}
var [n, arr] = input[a0_0x12ba69(0x1e6)]()[a0_0x12ba69(0x1db)]('\x0a');
arr = arr['split']('\x20')[a0_0x12ba69(0x1e2)](Number);
arr[a0_0x12ba69(0x1d7)](function (a, b) {
  return a - b;
});
var sum = arr[a0_0x12ba69(0x1da)](function (a, b) {
  return a + b;
});
function __STRING_ARRAY__() {
  var _0x219fdc = ['log', '1871780NOnRUu', 'readFileSync', '1973976XBoysQ', '70eJiQqV', 'map', '5287843zEkkqt', '474039ytQVGA', 'length', 'trim', 'utf8', '181290vxsHjI', '36YVBbAz', '12FzZQHh', '62754KKAsXA', '14dhCDfD', 'sort', '/dev/stdin', '60CFhprG', 'reduce', 'split', '33357KnwvOI'];
  __STRING_ARRAY__ = function () {
    return _0x219fdc;
  };
  return __STRING_ARRAY__();
}
if (sum % 0x2 == 0x0) {
  console[a0_0x12ba69(0x1dd)](sum / 0x2);
} else {
  for (var i = 0x0; i < arr[a0_0x12ba69(0x1e5)]; i++) {
    if (arr[i] % 0x2 == 0x1) {
      console[a0_0x12ba69(0x1dd)]((sum - arr[i]) / 0x2);
      break;
    }
  }
}
