function __STRING_ARRAY__() {
  var _0x318103 = ['10ZetppH', 'log', 'lastIndexOf', '1MomzfD', '4962NwGbdA', '587212LbGMJt', '2079802uvFbLS', 'trim', '2993160GnbOWY', '19992863FniUEr', '3129wbTKIv', '50859hJRXkF', '88XlEZQN', 'split', '11827920llYMnT'];
  __STRING_ARRAY__ = function () {
    return _0x318103;
  };
  return __STRING_ARRAY__();
}
var a0_0x5bf7c9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x5598e5 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x5598e5(0xcb)) / 0x1 * (-parseInt(_0x5598e5(0xce)) / 0x2) + parseInt(_0x5598e5(0xc1)) / 0x3 + -parseInt(_0x5598e5(0xcd)) / 0x4 * (parseInt(_0x5598e5(0xc8)) / 0x5) + parseInt(_0x5598e5(0xcc)) / 0x6 * (parseInt(_0x5598e5(0xc3)) / 0x7) + -parseInt(_0x5598e5(0xc5)) / 0x8 * (parseInt(_0x5598e5(0xc4)) / 0x9) + -parseInt(_0x5598e5(0xc7)) / 0xa + parseInt(_0x5598e5(0xc2)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x940fe);
const main = input => {
  var _0xb83009 = __DECODE_0__;
  var N = input[0x0] - 0x0;
  var str = input[0x1];
  var ans = 0x0;
  var min = 0x0;
  var max = ~~(N / 0x2);
  start: while (min <= max) {
    var ave = ~~((min + max) / 0x2);
    for (var i = 0x0; i < N - ave; i++) {
      var base = str['substring'](i, i + ave);
      if (str[_0xb83009(0xca)](base) >= i + ave) {
        min = ave + 0x1;
        ans = ave;
        continue start;
      }
    }
    max = ave - 0x1;
  }
  console[_0xb83009(0xc9)](ans);
};
function __DECODE_0__(jpyXlS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jpyXlS, key);
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')[a0_0x5bf7c9(0xc0)]()[a0_0x5bf7c9(0xc6)]('\x0a'));
