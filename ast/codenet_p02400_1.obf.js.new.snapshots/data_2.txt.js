function __DECODE_0__(CeREDb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CeREDb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xdb)) / 0x1 * (-parseInt(__DECODE_0__(0xe2)) / 0x2) + parseInt(__DECODE_0__(0xdc)) / 0x3 + parseInt(__DECODE_0__(0xe3)) / 0x4 + parseInt(__DECODE_0__(0xe0)) / 0x5 * (-parseInt(__DECODE_0__(0xd8)) / 0x6) + -parseInt(__DECODE_0__(0xe1)) / 0x7 + parseInt(__DECODE_0__(0xe6)) / 0x8 + -parseInt(__DECODE_0__(0xe5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x87480);
var lines = [];
function __STRING_ARRAY__() {
  var _0x29ac7d = ['6673dCkJeF', '726585LajEPn', 'readline', 'stdin', 'log', '260535jsLQPm', '7282632PgqKKm', '186cCVwsr', '3654880XnXQng', 'exit', '2716560Zgsska', '2626016ZQqjSU', '24nUaKMM', 'toFixed', 'createInterface'];
  __STRING_ARRAY__ = function () {
    return _0x29ac7d;
  };
  return __STRING_ARRAY__();
}
var reader = require(__DECODE_0__(0xdd))[__DECODE_0__(0xda)]({
  'input': process[__DECODE_0__(0xde)],
  'output': process['stdout']
});
reader['on']('line', function (line) {
  var a = line['split']('\x20');
  var b = parseInt(a[0x0], 0xa);
  var c = b * b * Math['PI'];
  var d = b * 0x2 * Math['PI'];
  console[__DECODE_0__(0xdf)](c[__DECODE_0__(0xd9)](0x6) + '\x20' + d[__DECODE_0__(0xd9)](0x6));
  process[__DECODE_0__(0xe4)]();
});
process[__DECODE_0__(0xde)]['on']('end', function () {});
