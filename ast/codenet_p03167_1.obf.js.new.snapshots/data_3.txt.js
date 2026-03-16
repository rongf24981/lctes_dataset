function __DECODE_0__(CWpUZv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 448;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CWpUZv, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1jVYZSq") / 1 * (parseInt("1725586vTQWby") / 2) + parseInt("9RQQhEl") / 3 * (parseInt("1252776LliZZD") / 4) + parseInt("3155745zrFiPo") / 5 + parseInt("1236060lizVXv") / 6 + parseInt("110019vyCVFr") / 7 * (-parseInt("296rjLZSH") / 8) + -parseInt("90xOQTLO") / 9 * (-parseInt("1248530shjhTF") / 10) + -parseInt("9283450tMzxsT") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 736999);
function Main(input) {
  input = input.trim()["split"]("\n")["map"](function (x) {
    return x["split"](" ");
  });
  let C = 1000000007;
  let H = parseInt(input[0][0], 10);
  let W = parseInt(input[0][1], 10);
  let DP = [];
  for (let i = 0; i < H; i++) {
    DP["push"](Array.from({
      length: W
    }, () => 0));
  }
  DP[0][0] = 1;
  for (let i = 1; i < H + W - 1; i++) {
    for (let j = 0; j <= Math["min"](i, H - 1); j++) {
      if (input[j + 1][0][i - j] === "#" || i - j >= W) {
        continue;
      }
      if (j > 0 && i - j > 0) {
        DP[j][i - j] = (DP[j - 1][i - j] + DP[j][i - j - 1]) % C;
      } else if (j > 0) {
        DP[j][i - j] = DP[j - 1][i - j];
      } else {
        DP[j][i - j] = DP[j][i - j - 1];
      }
    }
  }
  console["log"](DP["pop"]()["pop"]());
}
function __STRING_ARRAY__() {
  const _0x1e95f9 = ["1jVYZSq", "min", "296rjLZSH", "110019vyCVFr", "push", "1252776LliZZD", "9RQQhEl", "map", "readFileSync", "1236060lizVXv", "pop", "90xOQTLO", "1725586vTQWby", "split", "3155745zrFiPo", "9283450tMzxsT", "1248530shjhTF", "utf8", "log"];
  __STRING_ARRAY__ = function () {
    return _0x1e95f9;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
