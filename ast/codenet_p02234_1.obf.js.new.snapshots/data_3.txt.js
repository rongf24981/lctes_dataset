(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("681212aAcVQc") / 1 + -parseInt("1167506fBZwpO") / 2 * (parseInt("3bTjsQP") / 3) + -parseInt("842864TSDuDv") / 4 * (-parseInt("10dviJdA") / 5) + parseInt("2504490yrmftH") / 6 * (-parseInt("7oMqKKK") / 7) + -parseInt("4684232XxtyTq") / 8 + parseInt("5683761wrmrJk") / 9 * (parseInt("10IPaedk") / 10) + parseInt("62887fuhaYv") / 11 * (parseInt("3372swmPwO") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 391529);
function __DECODE_0__(vmaWdK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 203;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vmaWdK, key);
}
config = {
  input: "/dev/stdin",
  newline: "\n"
};
M = require("fs")["readFileSync"](config["input"], "ascii")["trim"]()["split"](config["newline"]);
M = M["map"](function (line) {
  return line["split"](" ")["map"](Number);
});
function __STRING_ARRAY__() {
  var _0x4d199f = ["input", "842864TSDuDv", "MAX_VALUE", "4684232XxtyTq", "newline", "1167506fBZwpO", "trim", "10dviJdA", "62887fuhaYv", "ascii", "5683761wrmrJk", "3372swmPwO", "split", "10IPaedk", "readFileSync", "3bTjsQP", "log", "7oMqKKK", "2504490yrmftH", "/dev/stdin", "681212aAcVQc", "map"];
  __STRING_ARRAY__ = function () {
    return _0x4d199f;
  };
  return __STRING_ARRAY__();
}
n = M[0][0];
min = {};
for (i = 1; i <= n; i++) {
  min[i] = {};
}
for (i = 1; i <= n; i++) {
  min[i][i] = 0;
}
for (i = 1; i < n; i++) {
  j = 1;
  k = 1 + i;
  for (; k <= n; j++, k++) {
    min[j][k] = Number["MAX_VALUE"];
    for (l = j; l < k; l++) {
      min[j][k] = Math.min(min[j][k], M[j][0] * M[l][1] * M[k][1] + min[j][l] + min[l + 1][k]);
    }
  }
}
console["log"](min[1][n]);
