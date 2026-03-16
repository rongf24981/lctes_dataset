var a0_0x1624f6 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xac7e0c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xac7e0c(0x192)) / 0x1 + -parseInt(_0xac7e0c(0x19d)) / 0x2 + parseInt(_0xac7e0c(0x18f)) / 0x3 * (parseInt(_0xac7e0c(0x19e)) / 0x4) + -parseInt(_0xac7e0c(0x19c)) / 0x5 * (-parseInt(_0xac7e0c(0x18c)) / 0x6) + -parseInt(_0xac7e0c(0x197)) / 0x7 + -parseInt(_0xac7e0c(0x195)) / 0x8 * (parseInt(_0xac7e0c(0x194)) / 0x9) + -parseInt(_0xac7e0c(0x193)) / 0xa * (parseInt(_0xac7e0c(0x199)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x43440);
var input = require('fs')[a0_0x1624f6(0x190)](a0_0x1624f6(0x19b), a0_0x1624f6(0x18d));
function __STRING_ARRAY__() {
  var _0x57233f = ['shift', '402734MNeUng', '56270sjnADu', '234RTSLpC', '152LceueW', 'log', '2446472aeOgce', 'replace', '55bgzhrh', 'split', '/dev/stdin', '1065DZDELk', '595028pRJgNU', '265624sKfBbC', '13578EKxIKF', 'utf8', 'test', '3HLmkrA', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x57233f;
  };
  return __STRING_ARRAY__();
}
var Arr = input[a0_0x1624f6(0x198)](/\n$/, '')[a0_0x1624f6(0x19a)]('\x0a');
var n = Arr[a0_0x1624f6(0x191)]();
function __DECODE_0__(tgeQmR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tgeQmR, key);
}
for (var i = 0x0; i < n; i++) {
  if (/^>'(=+)#\1~$/[a0_0x1624f6(0x18e)](Arr[i])) {
    console[a0_0x1624f6(0x196)]('A');
  } else {
    if (/^>\^(Q=)+~~$/['test'](Arr[i])) {
      console[a0_0x1624f6(0x196)]('B');
    } else {
      console[a0_0x1624f6(0x196)]('NA');
    }
  }
}
