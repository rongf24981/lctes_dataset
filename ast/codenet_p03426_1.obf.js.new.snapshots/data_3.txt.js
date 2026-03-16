function __DECODE_0__(xCvanU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xCvanU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("685163qLYlAS") / 1 + -parseInt("143348hQdNdj") / 2 + -parseInt("12VnGpHR") / 3 * (-parseInt("447988YTIbqo") / 4) + parseInt("368385xqTioL") / 5 * (parseInt("66cGHPOX") / 6) + parseInt("1502914WRMTRw") / 7 * (-parseInt("8DTnHVb") / 8) + parseInt("126261oYDfNt") / 9 * (-parseInt("400baLCJw") / 10) + parseInt("9618378JGXiPz") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 600134);
function Main(input) {
  input = input["split"]("\n");
  var H = input[0]["split"](" ")["map"](a => parseInt(a));
  var W = H[1];
  var D = H[2];
  H = H[0];
  var A;
  var x = new Array(H * W + 1)["fill"](0)["map"](a => new Array(2));
  for (var i = 0; i < H; i++) {
    A = input[i + 1]["split"](" ").map(a => parseInt(a));
    for (var j = 0; j < W; j++) {
      x[A[j]][0] = i;
      x[A[j]][1] = j;
    }
  }
  var y = new Array(H * W + 1).fill(0);
  for (i = D + 1; i <= H * W; i++) {
    y[i] = y[i - D] + Math["abs"](x[i - D][0] - x[i][0]) + Math["abs"](x[i - D][1] - x[i][1]);
  }
  var Q = parseInt(input[H + 1]);
  var ans = new Array(Q)["fill"](0);
  for (i = 0; i < Q; i++) {
    var L = input[H + 2 + i]["split"](" ")["map"](a => parseInt(a));
    var R = L[1];
    L = L[0];
    ans[i] = y[R] - y[L];
  }
  console["log"](ans["join"]("\n"));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x45349c = ["368385xqTioL", "join", "1502914WRMTRw", "685163qLYlAS", "66cGHPOX", "fill", "12VnGpHR", "9618378JGXiPz", "126261oYDfNt", "split", "447988YTIbqo", "log", "/dev/stdin", "400baLCJw", "8DTnHVb", "abs", "map", "143348hQdNdj"];
  __STRING_ARRAY__ = function () {
    return _0x45349c;
  };
  return __STRING_ARRAY__();
}
