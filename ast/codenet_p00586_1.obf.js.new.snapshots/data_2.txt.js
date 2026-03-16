(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f5)) / 0x1 * (parseInt(__DECODE_0__(0x1f7)) / 0x2) + parseInt(__DECODE_0__(0x1f4)) / 0x3 * (parseInt(__DECODE_0__(0x1fa)) / 0x4) + parseInt(__DECODE_0__(0x202)) / 0x5 * (parseInt(__DECODE_0__(0x1f9)) / 0x6) + -parseInt(__DECODE_0__(0x1fb)) / 0x7 + -parseInt(__DECODE_0__(0x200)) / 0x8 * (parseInt(__DECODE_0__(0x1fd)) / 0x9) + parseInt(__DECODE_0__(0x1fc)) / 0xa * (-parseInt(__DECODE_0__(0x203)) / 0xb) + parseInt(__DECODE_0__(0x201)) / 0xc * (parseInt(__DECODE_0__(0x205)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3c8a4);
function __DECODE_0__(chUvpX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(chUvpX, key);
}
function __STRING_ARRAY__() {
  var _0x5c70ab = ['3SRhzZy', '398491PGwTrq', 'utf8', '2zGaBLh', 'split', '6tBHcbR', '1839640YDhWxQ', '502782bZqbwM', '10cgHaVv', '1371690wGHAiD', 'forEach', 'readFileSync', '8zNmzAy', '14652LiljrN', '2378085axpgrn', '5185631gDdpqY', 'log', '4329BjQAws'];
  __STRING_ARRAY__ = function () {
    return _0x5c70ab;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1ff)]('/dev/stdin', __DECODE_0__(0x1f6));
var Arr = input['trim']()[__DECODE_0__(0x1f8)]('\x0a');
Arr[__DECODE_0__(0x1fe)](function (v) {
  var a = v['split']('\x20')[0x0] - 0x0;
  var b = v[__DECODE_0__(0x1f8)]('\x20')[0x1] - 0x0;
  console[__DECODE_0__(0x204)](a + b);
});
