function __STRING_ARRAY__() {
  var _0x5178c5 = ['323428uOtCZQ', '4076250FIsVWi', '301677vsPfGr', 'log', '2137045LuQNQA', '4wrPtPk', 'utf8', '6DkqAGO', 'sort', '32123wLzFVI', '12jmOOJG', 'split', '9uYBSVO', 'readFileSync', 'length', 'indexOf', '170258yAuGpt', '348DiixnI', '3449440lSMutV'];
  __STRING_ARRAY__ = function () {
    return _0x5178c5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc2)) / 0x1 * (-parseInt(__DECODE_0__(0xc3)) / 0x2) + -parseInt(__DECODE_0__(0xce)) / 0x3 * (-parseInt(__DECODE_0__(0xbe)) / 0x4) + -parseInt(__DECODE_0__(0xd0)) / 0x5 * (parseInt(__DECODE_0__(0xc0)) / 0x6) + -parseInt(__DECODE_0__(0xcc)) / 0x7 + parseInt(__DECODE_0__(0xcb)) / 0x8 + parseInt(__DECODE_0__(0xc5)) / 0x9 * (-parseInt(__DECODE_0__(0xcd)) / 0xa) + parseInt(__DECODE_0__(0xc9)) / 0xb * (parseInt(__DECODE_0__(0xca)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x47505);
function __DECODE_0__(iCftsB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iCftsB, key);
}
function Main(input) {
  var len = input[__DECODE_0__(0xc4)]('\x0a')[0x0];
  var list = input[__DECODE_0__(0xc4)]('\x0a')[0x1][__DECODE_0__(0xc4)]('\x20');
  list[__DECODE_0__(0xc1)](function (a, b) {
    return parseInt(a) - parseInt(b);
  });
  var b = list['filter'](function (x, i, self) {
    return self[__DECODE_0__(0xc8)](x) === i;
  });
  if (b[__DECODE_0__(0xc7)] % 0x2 == 0x1) {
    console[__DECODE_0__(0xcf)](b['length']);
  } else {
    console['log'](b[__DECODE_0__(0xc7)] - 0x1);
  }
}
Main(require('fs')[__DECODE_0__(0xc6)]('/dev/stdin', __DECODE_0__(0xbf)));
