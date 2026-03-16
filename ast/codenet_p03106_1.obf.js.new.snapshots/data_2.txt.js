function __STRING_ARRAY__() {
  var _0x52f56c = ['isInteger', '810033aBVCKs', '104872SuoUXn', '118725rxdaQs', '713378FmPHMM', '703668BCsRXV', '4943218kqsLmt', '1062576LLrAta', 'utf8', 'readFileSync', '423PVXZvf', '/dev/stdin', '30hvTCwE', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x52f56c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x113)) / 0x1 + parseInt(__DECODE_0__(0x116)) / 0x2 + -parseInt(__DECODE_0__(0x117)) / 0x3 + -parseInt(__DECODE_0__(0x119)) / 0x4 + -parseInt(__DECODE_0__(0x115)) / 0x5 * (parseInt(__DECODE_0__(0x110)) / 0x6) + -parseInt(__DECODE_0__(0x118)) / 0x7 + -parseInt(__DECODE_0__(0x114)) / 0x8 * (-parseInt(__DECODE_0__(0x11c)) / 0x9);
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
  const args = input[__DECODE_0__(0x111)]('\x20');
  var A = Number(args[0x0]);
  var B = Number(args[0x1]);
  var K = Number(args[0x2]);
  var cu = 0x0;
  var sum;
  var count = 0x0;
  for (cu = A; cu > 0x0; --cu) {
    if (Number[__DECODE_0__(0x112)](A / cu) && Number[__DECODE_0__(0x112)](B / cu)) {
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
main(require('fs')[__DECODE_0__(0x11b)](__DECODE_0__(0x11d), __DECODE_0__(0x11a)));
