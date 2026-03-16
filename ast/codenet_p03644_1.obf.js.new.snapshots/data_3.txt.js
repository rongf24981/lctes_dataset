function __STRING_ARRAY__() {
  var _0x50c668 = ["432918fsJfPH", "1645108CeqTvo", "readFileSync", "10668396qwvALN", "2644280OOXtQj", "2125774HJNyhO", "72BRYCEM", "425827QxhiYZ", "1881675Mbrbxc", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x50c668;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("425827QxhiYZ") / 1 + parseInt("1645108CeqTvo") / 2 + -parseInt("432918fsJfPH") / 3 + -parseInt("2644280OOXtQj") / 4 + parseInt("1881675Mbrbxc") / 5 + -parseInt("10668396qwvALN") / 6 + parseInt("2125774HJNyhO") / 7 * (parseInt("72BRYCEM") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 922758);
function main(input) {
  const N = input;
  var ans = 1;
  var cnt = 0;
  var maxCnt = 0;
  for (var i = 1; i <= N; i++) {
    cnt = 0;
    var tmp = i;
    while (true) {
      if (tmp % 2 === 0) {
        cnt = cnt + 1;
        tmp = tmp / 2;
      } else {
        break;
      }
    }
    if (maxCnt < cnt) {
      maxCnt = cnt;
      ans = i;
    }
  }
  console.log(ans);
}
function __DECODE_0__(BJwEMo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 338;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BJwEMo, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
