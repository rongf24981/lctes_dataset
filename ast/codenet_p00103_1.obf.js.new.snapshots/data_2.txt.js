(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xaf)) / 0x1 + parseInt(__DECODE_0__(0xb2)) / 0x2 + parseInt(__DECODE_0__(0xa9)) / 0x3 + -parseInt(__DECODE_0__(0xb7)) / 0x4 * (parseInt(__DECODE_0__(0xaa)) / 0x5) + parseInt(__DECODE_0__(0xb3)) / 0x6 * (-parseInt(__DECODE_0__(0xac)) / 0x7) + -parseInt(__DECODE_0__(0xb6)) / 0x8 * (-parseInt(__DECODE_0__(0xb1)) / 0x9) + parseInt(__DECODE_0__(0xad)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8561e);
var input = require('fs')[__DECODE_0__(0xae)](__DECODE_0__(0xab), __DECODE_0__(0xb5))['trim']();
var lines = input[__DECODE_0__(0xb0)]('\x0a');
var inning = +lines['shift']();
function __STRING_ARRAY__() {
  var _0x5e0a37 = ['440604EHwRSP', 'HOMERUN', 'utf8', '24pjbzvX', '4ngrYMd', '549756IhMWGP', '333565aalzCU', '/dev/stdin', '21Mqitim', '10651650eXYleP', 'readFileSync', '1043651kAxyjs', 'split', '1505583mJdrJz', '253444VBTjbc'];
  __STRING_ARRAY__ = function () {
    return _0x5e0a37;
  };
  return __STRING_ARRAY__();
}
var out = 0x0;
var score = 0x0;
var runner = 0x0;
var line;
function __DECODE_0__(anoAfK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(anoAfK, key);
}
while (line = lines['shift']()) {
  if (line == 'HIT') {
    runner++;
    if (runner > 0x3) {
      score++;
      runner--;
    }
  } else {
    if (line == __DECODE_0__(0xb4)) {
      score += runner + 0x1;
      runner = 0x0;
    } else {
      out++;
      if (out == 0x3) {
        console['log'](score);
        out = 0x0;
        score = 0x0;
        runner = 0x0;
        continue;
      }
    }
  }
}
