function __STRING_ARRAY__() {
  var _0x2ed309 = ['utf8', '161075HsUoSN', '3885152kiqONw', '6889860TQsRUO', '/dev/stdin', 'split', '236lDqotc', '5pkCUtY', '14RAVgpa', '9061479uochRh', 'log', '314234BIXBta', 'readFileSync', '8371SXUAKO', '85992bEzWrw', '25899bHzUVD', '10ymEfBS', 'Yes'];
  __STRING_ARRAY__ = function () {
    return _0x2ed309;
  };
  return __STRING_ARRAY__();
}
var a0_0x3a9960 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xcbed9 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0xcbed9(0x13c)) / 0x1 * (parseInt(_0xcbed9(0x140)) / 0x2) + -parseInt(_0xcbed9(0x144)) / 0x3 * (parseInt(_0xcbed9(0x13b)) / 0x4) + -parseInt(_0xcbed9(0x136)) / 0x5 + -parseInt(_0xcbed9(0x138)) / 0x6 + parseInt(_0xcbed9(0x13d)) / 0x7 * (-parseInt(_0xcbed9(0x137)) / 0x8) + -parseInt(_0xcbed9(0x13e)) / 0x9 * (parseInt(_0xcbed9(0x145)) / 0xa) + -parseInt(_0xcbed9(0x142)) / 0xb * (-parseInt(_0xcbed9(0x143)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf4146);
function main(input) {
  var _0xb2bf8 = __DECODE_0__;
  var line = input[_0xb2bf8(0x13a)]('\x0a')['map'](n => parseInt(n, 0xa));
  while (line[0x0] > 0x1f4) {
    line[0x0] -= 0x1f4;
  }
  line[0x0] <= line[0x1] ? console[_0xb2bf8(0x13f)](_0xb2bf8(0x134)) : console['log']('No');
}
function __DECODE_0__(wwKrVw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x134;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wwKrVw, key);
}
main(require('fs')[a0_0x3a9960(0x141)](a0_0x3a9960(0x139), a0_0x3a9960(0x135)));
