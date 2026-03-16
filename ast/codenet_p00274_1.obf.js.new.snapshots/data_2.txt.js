function __STRING_ARRAY__() {
  var _0x9d33f9 = ['976sUlgLh', 'split', '6yOCAGW', '2599509pYxNiJ', '72iLqYqV', '7917iyWBIN', '5187yFwOTz', '1GsZhfL', 'map', '19944WFHdWn', 'utf8', '129409jmTJPn', '255410oVFnig', '855ipnYKB', '/dev/stdin', 'forEach', 'log', '59550RiRcgm', '391735YRnReU', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x9d33f9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f3)) / 0x1 * (parseInt(__DECODE_0__(0x1f8)) / 0x2) + parseInt(__DECODE_0__(0x1f1)) / 0x3 * (-parseInt(__DECODE_0__(0x1ec)) / 0x4) + -parseInt(__DECODE_0__(0x1fe)) / 0x5 * (-parseInt(__DECODE_0__(0x1ee)) / 0x6) + -parseInt(__DECODE_0__(0x1f7)) / 0x7 * (parseInt(__DECODE_0__(0x1f0)) / 0x8) + -parseInt(__DECODE_0__(0x1f9)) / 0x9 * (-parseInt(__DECODE_0__(0x1fd)) / 0xa) + -parseInt(__DECODE_0__(0x1ef)) / 0xb + -parseInt(__DECODE_0__(0x1f5)) / 0xc * (-parseInt(__DECODE_0__(0x1f2)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5ecc9);
function __DECODE_0__(wKugxg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wKugxg, key);
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x1fa), __DECODE_0__(0x1f6));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x1ed)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x1ff)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0x1ff)]()[__DECODE_0__(0x1ed)]('\x20')[__DECODE_0__(0x1f4)](Number);
  var sum = 0x0;
  var flag = ![];
  arr[__DECODE_0__(0x1fb)](function (v) {
    if (v != 0x0) {
      sum += 0x1;
    }
    if (v >= 0x2) {
      flag = !![];
    }
  });
  console[__DECODE_0__(0x1fc)](flag ? sum + 0x1 : 'NA');
}
