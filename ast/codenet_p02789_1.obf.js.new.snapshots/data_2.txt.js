function __STRING_ARRAY__() {
  var _0x273db1 = ['readFileSync', '62108hmvsfb', '9195QkwJaQ', '647618nIDCPl', '/dev/stdin', '1266KFMimo', '2995090qpvDfw', 'Yes', '1348641rlMvrk', 'utf8', '10356786LbElsi', '1VJwCWk', '135AMMPBH', '33608oIbSMS', 'log', '69SiZlkU'];
  __STRING_ARRAY__ = function () {
    return _0x273db1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bXbfob, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bXbfob, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf5)) / 0x1 * (parseInt(__DECODE_0__(0xfd)) / 0x2) + -parseInt(__DECODE_0__(0xf9)) / 0x3 * (parseInt(__DECODE_0__(0xfb)) / 0x4) + parseInt(__DECODE_0__(0xfc)) / 0x5 * (parseInt(__DECODE_0__(0xff)) / 0x6) + -parseInt(__DECODE_0__(0x102)) / 0x7 + parseInt(__DECODE_0__(0xf7)) / 0x8 * (parseInt(__DECODE_0__(0xf6)) / 0x9) + -parseInt(__DECODE_0__(0x100)) / 0xa + parseInt(__DECODE_0__(0x104)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3594c);
function main(input) {
  var args = input['split']('\x20');
  var n = parseInt(args[0x0], 0xa);
  var m = parseInt(args[0x1], 0xa);
  if (n === m) {
    return __DECODE_0__(0x101);
  } else {
    return 'No';
  }
}
console[__DECODE_0__(0xf8)](main(require('fs')[__DECODE_0__(0xfa)](__DECODE_0__(0xfe), __DECODE_0__(0x103))));
