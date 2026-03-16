function __DECODE_0__(hRsNBc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ea;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hRsNBc, key);
}
function __STRING_ARRAY__() {
  var _0x2bbd90 = ['12113NHOekG', '310724KAlsPS', '158ZKayPL', '8hXkClB', '/dev/stdin', '5450346dSRKYQ', '510yfwnqq', '649847WELwFZ', 'readFileSync', '10170713nvuhqD', '5086494ddAgtq', 'forEach', '15EiSVqY', '4006974wVPjly', 'abs'];
  __STRING_ARRAY__ = function () {
    return _0x2bbd90;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f8)) / 0x1 * (-parseInt(__DECODE_0__(0x1eb)) / 0x2) + -parseInt(__DECODE_0__(0x1f6)) / 0x3 + -parseInt(__DECODE_0__(0x1ea)) / 0x4 * (-parseInt(__DECODE_0__(0x1f5)) / 0x5) + -parseInt(__DECODE_0__(0x1f3)) / 0x6 + parseInt(__DECODE_0__(0x1f2)) / 0x7 * (parseInt(__DECODE_0__(0x1ec)) / 0x8) + -parseInt(__DECODE_0__(0x1ee)) / 0x9 + parseInt(__DECODE_0__(0x1ef)) / 0xa * (parseInt(__DECODE_0__(0x1f0)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe8aa9);
function Main(input) {
  input = input['split'](/\s/);
  input[__DECODE_0__(0x1f4)](function (e, i, a) {
    a[i] = Number(a[i]);
  });
  var ans = 'No';
  if (Math[__DECODE_0__(0x1f7)](input[0x0] - input[0x2]) <= input[0x3]) {
    ans = 'Yes';
  }
  if (Math['abs'](input[0x0] - input[0x1]) <= input[0x3] && Math[__DECODE_0__(0x1f7)](input[0x1] - input[0x2]) <= input[0x3]) {
    ans = 'Yes';
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x1f1)](__DECODE_0__(0x1ed), 'utf8'));
