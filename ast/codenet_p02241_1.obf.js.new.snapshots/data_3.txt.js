(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("11361pJxdaZ") / 1 + -parseInt("556122ueQTCx") / 2 + parseInt("758469BsOPlF") / 3 * (-parseInt("4xIiXeW") / 4) + -parseInt("197465FDbxtU") / 5 + parseInt("48276VSfeja") / 6 + parseInt("975429byvvFE") / 7 + parseInt("4472144yHVjKG") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 147395);
config = {
  input: "/dev/stdin",
  newline: "\n"
};
A = require("fs")["readFileSync"](config.input, "ascii").trim()["split"](config.newline)["map"](function (line) {
  return line["trim"]()["split"](" ")["map"](Number);
});
n = Number(A["shift"]()[0]);
cnt = 1;
cost = 0;
conn = new Array(n);
function __DECODE_0__(Nhtncc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 182;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Nhtncc, key);
}
conn[0] = true;
for (i = 1; i < n; i++) {
  conn[i] = false;
}
while (cnt < n) {
  min = Number["MAX_SAFE_INTEGER"];
  for (i in conn) {
    if (!conn[i]) {
      continue;
    }
    Ai = A[i];
    for (j in conn) {
      if (conn[j]) {
        continue;
      }
      if (Ai[j] !== -1 && Ai[j] < min) {
        min = Ai[j];
        min_j = j;
      }
    }
  }
  conn[min_j] = true;
  cost += min;
  cnt++;
}
console["log"](cost);
function __STRING_ARRAY__() {
  var _0x1f7ff3 = ["758469BsOPlF", "11361pJxdaZ", "4472144yHVjKG", "556122ueQTCx", "975429byvvFE", "197465FDbxtU", "shift", "split", "readFileSync", "trim", "MAX_SAFE_INTEGER", "log", "4xIiXeW", "48276VSfeja", "/dev/stdin", "ascii", "map"];
  __STRING_ARRAY__ = function () {
    return _0x1f7ff3;
  };
  return __STRING_ARRAY__();
}
