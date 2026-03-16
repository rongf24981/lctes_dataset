function __STRING_ARRAY__() {
  var _0x52f56c = ['isInteger', '810033aBVCKs', '104872SuoUXn', '118725rxdaQs', '713378FmPHMM', '703668BCsRXV', '4943218kqsLmt', '1062576LLrAta', 'utf8', 'readFileSync', '423PVXZvf', '/dev/stdin', '30hvTCwE', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x52f56c;
  };
  return __STRING_ARRAY__();
}
var a0_0x4b358b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x48708d = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x48708d(0x113)) / 0x1 + parseInt(_0x48708d(0x116)) / 0x2 + -parseInt(_0x48708d(0x117)) / 0x3 + -parseInt(_0x48708d(0x119)) / 0x4 + -parseInt(_0x48708d(0x115)) / 0x5 * (parseInt(_0x48708d(0x110)) / 0x6) + -parseInt(_0x48708d(0x118)) / 0x7 + -parseInt(_0x48708d(0x114)) / 0x8 * (-parseInt(_0x48708d(0x11c)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6fc12);
function main(input) {
  var _0x3aec58 = __DECODE_0__;
  const args = input[_0x3aec58(0x111)]('\x20');
  var A = Number(args[0x0]);
  var B = Number(args[0x1]);
  var K = Number(args[0x2]);
  var cu = 0x0;
  var sum;
  var count = 0x0;
  for (cu = A; cu > 0x0; --cu) {
    if (Number[_0x3aec58(0x112)](A / cu) && Number[_0x3aec58(0x112)](B / cu)) {
      count++;
      if (count === K) {
        sum = cu;
        break;
      }
    }
  }
  console['log'](sum);
}
function __DECODE_0__(Ayidwm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x110;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ayidwm, key);
}
main(require('fs')[a0_0x4b358b(0x11b)](a0_0x4b358b(0x11d), a0_0x4b358b(0x11a)));
