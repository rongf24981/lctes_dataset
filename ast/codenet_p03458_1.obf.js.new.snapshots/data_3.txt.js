function __DECODE_0__(JPdDql, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JPdDql, key);
}
function __STRING_ARRAY__() {
  var _0x26e2ac = ["readFileSync", "116474YgMzaP", "2hhMiwq", "8348IZZjdc", "24552SYcYwe", "3252kYOPzN", "9462LruQym", "fill", "split", "166240TqPfuQ", "map", "81IFRBXu", "18469HbtfMw", "680160EMIwHJ", "721MqeLhY", "/dev/stdin", "220eZmVWr", "utf8", "log"];
  __STRING_ARRAY__ = function () {
    return _0x26e2ac;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2hhMiwq") / 1 * (-parseInt("116474YgMzaP") / 2) + parseInt("81IFRBXu") / 3 * (-parseInt("8348IZZjdc") / 4) + parseInt("166240TqPfuQ") / 5 + parseInt("9462LruQym") / 6 * (-parseInt("721MqeLhY") / 7) + -parseInt("680160EMIwHJ") / 8 + -parseInt("24552SYcYwe") / 9 * (-parseInt("220eZmVWr") / 10) + parseInt("18469HbtfMw") / 11 * (parseInt("3252kYOPzN") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 127999);
function Main(input) {
  input = input["split"]("\n");
  var N = input[0]["split"](" ")["map"](a => parseInt(a));
  var K = N[1];
  N = N[0];
  var x = [];
  var y = [];
  var c = [];
  for (var i = 0; i < N; i++) {
    x[i] = input[i + 1]["split"](" ");
    y[i] = parseInt(x[i][1]) % (K * 2);
    c[i] = x[i][2] === "W" ? 0 : 1;
    x[i] = parseInt(x[i][0]) % (K * 2);
  }
  var ans = 0;
  for (i = 0; i < K; i++) {
    var now = 0;
    var Y1 = new Array(K * 2)["fill"](0);
    var Y2 = new Array(K * 2).fill(0);
    for (var k = 0; k < N; k++) {
      if ((((x[k] + i) / K ^ y[k] / K) & 1) === c[k]) {
        now++;
        Y1[y[k]]++;
      } else {
        Y2[y[k]]++;
      }
    }
    if (ans < now) {
      ans = now;
    }
    if (ans < N - now) {
      ans = N - now;
    }
    for (var j = 0; j < K - 1; j++) {
      now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
      if (ans < now) {
        ans = now;
      }
      if (ans < N - now) {
        ans = N - now;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
