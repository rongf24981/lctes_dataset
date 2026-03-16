'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x14c)) / 0x1 * (parseInt(__DECODE_0__(0x147)) / 0x2) + parseInt(__DECODE_0__(0x150)) / 0x3 * (-parseInt(__DECODE_0__(0x13c)) / 0x4) + parseInt(__DECODE_0__(0x13e)) / 0x5 * (parseInt(__DECODE_0__(0x14d)) / 0x6) + -parseInt(__DECODE_0__(0x152)) / 0x7 * (parseInt(__DECODE_0__(0x14b)) / 0x8) + -parseInt(__DECODE_0__(0x14f)) / 0x9 * (parseInt(__DECODE_0__(0x141)) / 0xa) + parseInt(__DECODE_0__(0x140)) / 0xb * (-parseInt(__DECODE_0__(0x148)) / 0xc) + parseInt(__DECODE_0__(0x142)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6a69b);
function __STRING_ARRAY__() {
  var _0x43510e = ['print', '47792Lfcrnd', 'reverse', '65Zvzpbn', 'readFileSync', '1205809PSDaaP', '140fDMSrE', '46123298QoSdym', 'split', 'log', 'utf8', 'shift', '13276PiHdlH', '72tDykbs', 'replace', 'join', '240TTEYVP', '109NkUnet', '65034FoQGUz', '/dev/stdin', '433737WsQZMb', '213QtzMre', 'slice', '81368GajKmb'];
  __STRING_ARRAY__ = function () {
    return _0x43510e;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x13f)](__DECODE_0__(0x14e), __DECODE_0__(0x145))['replace'](/\r?\n$/, '')[__DECODE_0__(0x143)](/\r?\n/));
function __DECODE_0__(VdVANM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VdVANM, key);
}
function main(lines) {
  var str = lines[__DECODE_0__(0x146)]();
  lines[__DECODE_0__(0x146)]();
  var code;
  while (code = lines[__DECODE_0__(0x146)]()) {
    code = code['split']('\x20');
    var from = +code[0x1];
    var to = +code[0x2];
    switch (code[0x0]) {
      case __DECODE_0__(0x153):
        console[__DECODE_0__(0x144)](str[__DECODE_0__(0x151)](from, to + 0x1));
        break;
      case __DECODE_0__(0x149):
        str = str[__DECODE_0__(0x151)](0x0, from) + code[0x3] + str[__DECODE_0__(0x151)](to + 0x1);
        break;
      case __DECODE_0__(0x13d):
        str = str[__DECODE_0__(0x151)](0x0, from) + str[__DECODE_0__(0x151)](from, to + 0x1)['split']('')[__DECODE_0__(0x13d)]()[__DECODE_0__(0x14a)]('') + str[__DECODE_0__(0x151)](to + 0x1);
        break;
    }
  }
}
