(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("910273WCrdlW") / 1 + -parseInt("2470238KvaZDp") / 2 + parseInt("3MofqhJ") / 3 * (-parseInt("1390852EXGZzN") / 4) + parseInt("56340hpcAbm") / 5 * (parseInt("690UIntDx") / 6) + parseInt("321307GfFigT") / 7 * (-parseInt("216DXsZQE") / 8) + -parseInt("8846739yiqYjr") / 9 + parseInt("70VRvNIT") / 10 * (parseInt("3754289zAkHKC") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 790056);
function Main(input) {
  const Param = input["split"](" ");
  const N = i(Param[0]);
  const M = i(Param[1]);
  const K = i(Param[2]);
  for (var n = 0; n < N; n++) {
    for (var m = 0; m < M; m++) {
      var b = calcBlack(n, m, N, M);
      if (b == K) {
        return console["log"]("Yes");
      }
    }
  }
  console["log"]("No");
}
function __DECODE_0__(vujwjc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 497;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vujwjc, key);
}
function calcBlack(n, m, N, M) {
  return N * n - m * n + (M * m - n * m);
}
function __STRING_ARRAY__() {
  const _0x5e174b = ["56340hpcAbm", "2470238KvaZDp", "readFileSync", "3MofqhJ", "utf8", "70VRvNIT", "split", "216DXsZQE", "1390852EXGZzN", "log", "3754289zAkHKC", "690UIntDx", "8846739yiqYjr", "910273WCrdlW", "321307GfFigT"];
  __STRING_ARRAY__ = function () {
    return _0x5e174b;
  };
  return __STRING_ARRAY__();
}
function i(x) {
  return parseInt(x, 10);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
