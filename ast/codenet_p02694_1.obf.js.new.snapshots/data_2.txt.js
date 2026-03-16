(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb6)) / 0x1 * (parseInt(__DECODE_0__(0xbd)) / 0x2) + -parseInt(__DECODE_0__(0xbb)) / 0x3 + -parseInt(__DECODE_0__(0xb8)) / 0x4 * (-parseInt(__DECODE_0__(0xb4)) / 0x5) + -parseInt(__DECODE_0__(0xbe)) / 0x6 * (-parseInt(__DECODE_0__(0xb2)) / 0x7) + -parseInt(__DECODE_0__(0xbc)) / 0x8 * (-parseInt(__DECODE_0__(0xba)) / 0x9) + parseInt(__DECODE_0__(0xb9)) / 0xa + parseInt(__DECODE_0__(0xb1)) / 0xb * (parseInt(__DECODE_0__(0xbf)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xec521);
function __DECODE_0__(pYImok, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pYImok, key);
}
const main = inputs => {
  var array = inputs[0x0]['split']('\x20');
  var X = Number(array);
  var num = 0x64;
  var count = 0x0;
  while (0x1) {
    var risoku = Math[__DECODE_0__(0xb5)](num * 0.01);
    num = num + risoku;
    count++;
    if (X <= num) {
      break;
    }
  }
  console[__DECODE_0__(0xc0)](count);
};
main(require('fs')['readFileSync'](__DECODE_0__(0xc1), __DECODE_0__(0xb7))[__DECODE_0__(0xb3)]()['split']('\x0a'));
function __STRING_ARRAY__() {
  var _0x2146dd = ['/dev/stdin', '38874AAjMDT', '64988nPGAde', 'trim', '952345pZBJZT', 'floor', '344426rEcgsK', 'UTF-8', '20lbnmFQ', '3829600XirHiR', '56214XVNLIF', '5251836AhCTvO', '504eFQGgX', '4PTmlxQ', '78ZrlKuo', '612JtROHq', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x2146dd;
  };
  return __STRING_ARRAY__();
}
