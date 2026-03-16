(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc1)) / 0x1 + -parseInt(__DECODE_0__(0xce)) / 0x2 * (parseInt(__DECODE_0__(0xd4)) / 0x3) + parseInt(__DECODE_0__(0xc9)) / 0x4 * (-parseInt(__DECODE_0__(0xc6)) / 0x5) + -parseInt(__DECODE_0__(0xd5)) / 0x6 * (parseInt(__DECODE_0__(0xc5)) / 0x7) + -parseInt(__DECODE_0__(0xd1)) / 0x8 + parseInt(__DECODE_0__(0xd0)) / 0x9 + parseInt(__DECODE_0__(0xcc)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd4db6);
process[__DECODE_0__(0xc8)][__DECODE_0__(0xc7)]();
function __STRING_ARRAY__() {
  var _0x7f0371 = ['setEncoding', '2479419zqvIXu', '278034bTtAnG', 'line', '1121988vilwQC', 'close', 'utf8', 'max', '70eLlNgg', '75wEpuEa', 'resume', 'stdin', '107808KrHQkG', 'stdout', 'apply', '28307450cYEbIy', 'push', '2uoYYUl', 'createInterface', '15005700GwTYPe', '6480416orHZiZ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x7f0371;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xc8)][__DECODE_0__(0xd3)](__DECODE_0__(0xc3));
var lines = [];
var t = [];
var reader = require('readline')[__DECODE_0__(0xcf)]({
  'input': process['stdin'],
  'output': process[__DECODE_0__(0xca)]
});
reader['on'](__DECODE_0__(0xc0), line => {
  lines[__DECODE_0__(0xcd)](line);
});
function __DECODE_0__(abTxHY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(abTxHY, key);
}
reader['on'](__DECODE_0__(0xc2), () => {
  var x = lines[0x0]['split']('\x20');
  var a = parseInt(x[0x0]);
  var b = parseInt(x[0x1]);
  var c = parseInt(x[0x2]);
  var d = parseInt(x[0x3]);
  var ac = a * c;
  var ad = a * d;
  var bc = b * c;
  var bd = b * d;
  t[__DECODE_0__(0xcd)](ac);
  t[__DECODE_0__(0xcd)](ad);
  t['push'](bc);
  t[__DECODE_0__(0xcd)](bd);
  console[__DECODE_0__(0xd2)](Math[__DECODE_0__(0xc4)][__DECODE_0__(0xcb)](null, t));
});
