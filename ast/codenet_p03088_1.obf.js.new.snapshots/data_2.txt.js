(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11a)) / 0x1 + -parseInt(__DECODE_0__(0x111)) / 0x2 * (-parseInt(__DECODE_0__(0x110)) / 0x3) + -parseInt(__DECODE_0__(0x112)) / 0x4 * (-parseInt(__DECODE_0__(0x11c)) / 0x5) + -parseInt(__DECODE_0__(0x117)) / 0x6 * (-parseInt(__DECODE_0__(0x115)) / 0x7) + -parseInt(__DECODE_0__(0x10f)) / 0x8 + parseInt(__DECODE_0__(0x10e)) / 0x9 + -parseInt(__DECODE_0__(0x116)) / 0xa;
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
  const N = Number(input);
  console[__DECODE_0__(0x11b)](calc(N, '', 0x0));
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
    var next4 = next[__DECODE_0__(0x118)](-0x4);
    if (next3[0x0] + next3[0x1] + next3[0x2] != __DECODE_0__(0x114) && next3[0x0] + next3[0x2] + next3[0x1] != __DECODE_0__(0x114) && next3[0x1] + next3[0x0] + next3[0x2] != __DECODE_0__(0x114) && next4[0x0] + next4[0x1] + next4[0x3] != __DECODE_0__(0x114) && next4[0x0] + next4[0x2] + next4[0x3] != 'AGC') {
      ans += calc(N, next[__DECODE_0__(0x118)](-0x4), cnt + 0x1);
      ans %= 0x3b9aca07;
    }
  }
  map[key] = ans;
  return ans;
}
main(require('fs')['readFileSync'](__DECODE_0__(0x113), __DECODE_0__(0x119)));
