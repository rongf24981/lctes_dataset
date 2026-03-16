var a0_0x52f9e9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1e9317 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1e9317(0x11a)) / 0x1 + -parseInt(_0x1e9317(0x111)) / 0x2 * (-parseInt(_0x1e9317(0x110)) / 0x3) + -parseInt(_0x1e9317(0x112)) / 0x4 * (-parseInt(_0x1e9317(0x11c)) / 0x5) + -parseInt(_0x1e9317(0x117)) / 0x6 * (-parseInt(_0x1e9317(0x115)) / 0x7) + -parseInt(_0x1e9317(0x10f)) / 0x8 + parseInt(_0x1e9317(0x10e)) / 0x9 + -parseInt(_0x1e9317(0x116)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc96a9);
const main = input => {
  var _0x12f69e = __DECODE_0__;
  const N = Number(input);
  console[_0x12f69e(0x11b)](calc(N, '', 0x0));
};
var map = {};
function __STRING_ARRAY__() {
  var _0x283161 = ['/dev/stdin', 'AGC', '445340nmaNNn', '11974990XKIKFf', '6wnuLLl', 'slice', 'UTF-8', '1383570UCdziW', 'log', '45lwXPGU', '5574132PnjNvd', '7589352jfQtMq', '6GRVAbX', '479930yYYaUj', '188756gFuJxh'];
  __STRING_ARRAY__ = function () {
    return _0x283161;
  };
  return __STRING_ARRAY__();
}
var w = ['A', 'C', 'G', 'T'];
function __DECODE_0__(marULE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(marULE, key);
}
function calc(N, lst4, cnt) {
  var _0x28c5a9 = __DECODE_0__;
  var key = lst4 + '_' + cnt;
  if (map[key]) {
    return map[key];
  }
  if (cnt == N) {
    return 0x1;
  }
  var ans = 0x0;
  for (var i = 0x0; i < 0x4; i++) {
    var next = lst4 + w[i];
    var next3 = next['slice'](-0x3);
    var next4 = next[_0x28c5a9(0x118)](-0x4);
    if (next3[0x0] + next3[0x1] + next3[0x2] != _0x28c5a9(0x114) && next3[0x0] + next3[0x2] + next3[0x1] != _0x28c5a9(0x114) && next3[0x1] + next3[0x0] + next3[0x2] != _0x28c5a9(0x114) && next4[0x0] + next4[0x1] + next4[0x3] != _0x28c5a9(0x114) && next4[0x0] + next4[0x2] + next4[0x3] != 'AGC') {
      ans += calc(N, next[_0x28c5a9(0x118)](-0x4), cnt + 0x1);
      ans %= 0x3b9aca07;
    }
  }
  map[key] = ans;
  return ans;
}
main(require('fs')['readFileSync'](a0_0x52f9e9(0x113), a0_0x52f9e9(0x119)));
