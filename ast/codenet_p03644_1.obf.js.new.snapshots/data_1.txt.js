var a0_0x179905 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x50c668 = ['432918fsJfPH', '1645108CeqTvo', 'readFileSync', '10668396qwvALN', '2644280OOXtQj', '2125774HJNyhO', '72BRYCEM', '425827QxhiYZ', '1881675Mbrbxc', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x50c668;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x42ed9f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x42ed9f(0x159)) / 0x1 + parseInt(_0x42ed9f(0x153)) / 0x2 + -parseInt(_0x42ed9f(0x152)) / 0x3 + -parseInt(_0x42ed9f(0x156)) / 0x4 + parseInt(_0x42ed9f(0x15a)) / 0x5 + -parseInt(_0x42ed9f(0x155)) / 0x6 + parseInt(_0x42ed9f(0x157)) / 0x7 * (parseInt(_0x42ed9f(0x158)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1486);
function main(input) {
  const N = input;
  var ans = 0x1;
  var cnt = 0x0;
  var maxCnt = 0x0;
  for (var i = 0x1; i <= N; i++) {
    cnt = 0x0;
    var tmp = i;
    while (!![]) {
      if (tmp % 0x2 === 0x0) {
        cnt = cnt + 0x1;
        tmp = tmp / 0x2;
      } else {
        break;
      }
    }
    if (maxCnt < cnt) {
      maxCnt = cnt;
      ans = i;
    }
  }
  console['log'](ans);
}
function __DECODE_0__(BJwEMo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x152;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BJwEMo, key);
}
main(require('fs')[a0_0x179905(0x154)](a0_0x179905(0x15b), 'utf8'));
