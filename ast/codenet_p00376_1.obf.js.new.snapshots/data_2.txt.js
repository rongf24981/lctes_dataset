(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x19b)) / 0x1 + -parseInt(__DECODE_0__(0x18f)) / 0x2 + -parseInt(__DECODE_0__(0x196)) / 0x3 + parseInt(__DECODE_0__(0x192)) / 0x4 * (parseInt(__DECODE_0__(0x19c)) / 0x5) + -parseInt(__DECODE_0__(0x194)) / 0x6 + parseInt(__DECODE_0__(0x199)) / 0x7 + parseInt(__DECODE_0__(0x195)) / 0x8 * (parseInt(__DECODE_0__(0x191)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6bf69);
var input = require('fs')[__DECODE_0__(0x197)](__DECODE_0__(0x198), 'utf8');
var [a, b] = input['trim']()[__DECODE_0__(0x190)]('\x20')[__DECODE_0__(0x193)](Number);
console[__DECODE_0__(0x19a)](Math['abs'](b - a));
function __DECODE_0__(Npzfvr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Npzfvr, key);
}
function __STRING_ARRAY__() {
  var _0x4125bd = ['1995768yENmEk', 'readFileSync', '/dev/stdin', '793583rVRGaz', 'log', '153579zbpKpi', '25HAVmkW', '101980LFsTPC', 'split', '8080353wkSInZ', '612052FMvJHH', 'map', '4628202mYLqkf', '8peHKCk'];
  __STRING_ARRAY__ = function () {
    return _0x4125bd;
  };
  return __STRING_ARRAY__();
}
