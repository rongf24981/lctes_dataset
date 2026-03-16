function __DECODE_0__(hTdKXK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hTdKXK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ee)) / 0x1 * (parseInt(__DECODE_0__(0x1ec)) / 0x2) + parseInt(__DECODE_0__(0x1e2)) / 0x3 * (parseInt(__DECODE_0__(0x1ea)) / 0x4) + -parseInt(__DECODE_0__(0x1e3)) / 0x5 + -parseInt(__DECODE_0__(0x1e4)) / 0x6 + -parseInt(__DECODE_0__(0x1e6)) / 0x7 + -parseInt(__DECODE_0__(0x1e5)) / 0x8 + parseInt(__DECODE_0__(0x1e1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf454);
function main(arg) {
  var arg2 = arg[__DECODE_0__(0x1e7)](/\n/g);
  var honbun = arg2[0x1];
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (i = 0x0; i < alphabet[__DECODE_0__(0x1e9)]; i++) {
    var iro = alphabet[__DECODE_0__(0x1ed)](i, 0x1);
    var regkun = new RegExp(iro + '+', 'g');
    honbun = honbun[__DECODE_0__(0x1e8)](regkun, iro);
  }
  console['log'](honbun[__DECODE_0__(0x1e9)]);
}
function __STRING_ARRAY__() {
  var _0x2901dc = ['28200771fxIGLN', '10545YsqvmU', '3519970wHvnvy', '3704052lqFuBa', '11334576TPGxEw', '7576534MmoSAZ', 'split', 'replace', 'length', '692IzZIMa', 'readFileSync', '4700RxUYWa', 'substr', '367GSJkvc', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2901dc;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1eb)](__DECODE_0__(0x1e0), 'utf8'));
