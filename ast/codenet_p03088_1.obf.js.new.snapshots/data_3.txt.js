(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1383570UCdziW") / 1 + -parseInt("479930yYYaUj") / 2 * (-parseInt("6GRVAbX") / 3) + -parseInt("188756gFuJxh") / 4 * (-parseInt("45lwXPGU") / 5) + -parseInt("6wnuLLl") / 6 * (-parseInt("445340nmaNNn") / 7) + -parseInt("7589352jfQtMq") / 8 + parseInt("5574132PnjNvd") / 9 + -parseInt("11974990XKIKFf") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 825001);
const main = input => {
  const N = Number(input);
  console["log"](calc(N, "", 0));
};
var map = {};
function __STRING_ARRAY__() {
  var _0x283161 = ["/dev/stdin", "AGC", "445340nmaNNn", "11974990XKIKFf", "6wnuLLl", "slice", "UTF-8", "1383570UCdziW", "log", "45lwXPGU", "5574132PnjNvd", "7589352jfQtMq", "6GRVAbX", "479930yYYaUj", "188756gFuJxh"];
  __STRING_ARRAY__ = function () {
    return _0x283161;
  };
  return __STRING_ARRAY__();
}
var w = ["A", "C", "G", "T"];
function __DECODE_0__(marULE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 270;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(marULE, key);
}
function calc(N, lst4, cnt) {
  var key = lst4 + "_" + cnt;
  if (map[key]) {
    return map[key];
  }
  if (cnt == N) {
    return 1;
  }
  var ans = 0;
  for (var i = 0; i < 4; i++) {
    var next = lst4 + w[i];
    var next3 = next.slice(-3);
    var next4 = next["slice"](-4);
    if (next3[0] + next3[1] + next3[2] != "AGC" && next3[0] + next3[2] + next3[1] != "AGC" && next3[1] + next3[0] + next3[2] != "AGC" && next4[0] + next4[1] + next4[3] != "AGC" && next4[0] + next4[2] + next4[3] != "AGC") {
      ans += calc(N, next["slice"](-4), cnt + 1);
      ans %= 1000000007;
    }
  }
  map[key] = ans;
  return ans;
}
main(require("fs").readFileSync("/dev/stdin", "UTF-8"));
