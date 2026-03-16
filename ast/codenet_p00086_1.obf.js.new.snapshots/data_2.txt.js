(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xd0)) / 0x1 + parseInt(__DECODE_0__(0xcf)) / 0x2 + parseInt(__DECODE_0__(0xd6)) / 0x3 + parseInt(__DECODE_0__(0xcb)) / 0x4 * (-parseInt(__DECODE_0__(0xda)) / 0x5) + -parseInt(__DECODE_0__(0xca)) / 0x6 + -parseInt(__DECODE_0__(0xc9)) / 0x7 * (-parseInt(__DECODE_0__(0xce)) / 0x8) + -parseInt(__DECODE_0__(0xd3)) / 0x9 * (-parseInt(__DECODE_0__(0xcc)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa0239);
var input = require('fs')[__DECODE_0__(0xdb)](__DECODE_0__(0xd5), __DECODE_0__(0xd7))[__DECODE_0__(0xd1)]();
function __DECODE_0__(tFCTst, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tFCTst, key);
}
function __STRING_ARRAY__() {
  var _0x3bfa86 = ['log', '2021031CNkLaK', 'filter', '/dev/stdin', '2461542empTed', 'utf8', 'length', 'shift', '25kEoaRR', 'readFileSync', '0\x200', '875SRrpFX', '935862oqxxgf', '747700DhCbYy', '10XGTeQO', 'split', '25320UQVmJm', '1041880HYauJe', '215107qgWZXB', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3bfa86;
  };
  return __STRING_ARRAY__();
}
var lines = input[__DECODE_0__(0xcd)]('\x0a');
while (lines['length'] > 0x0) {
  var path = [];
  var line;
  while ((line = lines[__DECODE_0__(0xd9)]()) != __DECODE_0__(0xdc)) {
    var nums = line[__DECODE_0__(0xcd)]('\x20');
    var from = +nums[0x0];
    var to = +nums[0x1];
    path[from] = (path[from] || 0x0) + 0x1;
    path[to] = (path[to] || 0x0) + 0x1;
  }
  var odds = path[__DECODE_0__(0xd4)](function (n) {
    return n % 0x2 == 0x1;
  });
  if (path[0x1] % 0x2 == 0x1 && path[0x2] % 0x2 == 0x1 && odds[__DECODE_0__(0xd8)] > 0x2) {
    console[__DECODE_0__(0xd2)]('NG');
  } else {
    console[__DECODE_0__(0xd2)]('OK');
  }
}
