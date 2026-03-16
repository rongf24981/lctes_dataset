(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("95799iyhUWF") / 1 + parseInt("193786JMgLod") / 2 * (parseInt("6UeFPaW") / 3) + parseInt("981716YdfdGc") / 4 + parseInt("145360xHcttm") / 5 * (-parseInt("48clEskl") / 6) + parseInt("7ACQfqd") / 7 * (-parseInt("1288344CTflFV") / 8) + -parseInt("9jLZcjP") / 9 * (-parseInt("57520OhQAog") / 10) + -parseInt("265683IurKLN") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 122994);
inp = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
l = inp["shift"]()["split"](" ");
H = l["shift"]() * 1;
W = l["shift"]() * 1;
l = [];
m = [];
for (i = 0; i < H; i++) {
  l.push(inp["shift"]()["split"](""));
  m[i] = [];
  for (j = 0; j < W; j++) {
    m[i][j] = 0;
  }
}
if (l[0][0] == "#") {
  m[0][0] = 1;
}
r = 0;
for (c = 1; c < W; c++) {
  m[r][c] = l[r][c - 1] == l[r][c] ? m[r][c - 1] : m[r][c - 1] + 1;
}
c = 0;
for (r = 1; r < H; r++) {
  m[r][c] = l[r - 1][c] == l[r][c] ? m[r - 1][c] : m[r - 1][c] + 1;
}
function __STRING_ARRAY__() {
  var _0x417015 = ["log", "265683IurKLN", "min", "1288344CTflFV", "shift", "95799iyhUWF", "6UeFPaW", "9jLZcjP", "trim", "ceil", "7ACQfqd", "193786JMgLod", "48clEskl", "57520OhQAog", "utf8", "145360xHcttm", "readFileSync", "981716YdfdGc", "split"];
  __STRING_ARRAY__ = function () {
    return _0x417015;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OKwJDM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 186;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OKwJDM, key);
}
for (i = 1; i < H; i++) {
  r = i;
  for (c = i; c < W; c++) {
    s = l[r][c - 1] == l[r][c] ? m[r][c - 1] : m[r][c - 1] + 1;
    t = l[r - 1][c] == l[r][c] ? m[r - 1][c] : m[r - 1][c] + 1;
    m[r][c] = Math["min"](s, t);
  }
  c = i;
  for (r = i; r < H; r++) {
    s = l[r - 1][c] == l[r][c] ? m[r - 1][c] : m[r - 1][c] + 1;
    t = l[r][c - 1] == l[r][c] ? m[r][c - 1] : m[r][c - 1] + 1;
    m[r][c] = Math["min"](s, t);
  }
}
console["log"](Math["ceil"](m[H - 1][W - 1] / 2));
