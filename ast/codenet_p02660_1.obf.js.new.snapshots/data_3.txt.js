function __DECODE_0__(Nyptqa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 468;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Nyptqa, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1051317ljMdsa") / 1 + -parseInt("1258888Uoyzrk") / 2 + -parseInt("2112822cmldGr") / 3 * (parseInt("4fcGjxX") / 4) + -parseInt("3270985HbPkNx") / 5 + -parseInt("18pSGtfO") / 6 * (parseInt("324457ZXtyri") / 7) + -parseInt("5570632nOFsPw") / 8 + -parseInt("27198XiFHCE") / 9 * (-parseInt("7720bqzKVs") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 561004);
function Main(input) {
  input = input["split"]("\n");
  var N = parseInt(input[0]);
  var ans = 0;
  var set = new Set();
  var N2 = N;
  for (var i = 2; i < Math["sqrt"](N); i++) {
    var x = i;
    for (var j = 1; x < N; j++) {
      if (N2 % Math["pow"](i, j) == 0) {
        ans++;
        N2 = N2 / Math["pow"](i, j);
      } else {
        break;
      }
      x = Math.pow(i, j + 1);
    }
  }
  if (ans == 0 && N != 1) {
    ans = 1;
  }
  console["log"]("%s", ans);
  return ans;
}
function __STRING_ARRAY__() {
  var _0x5ca636 = ["7720bqzKVs", "18pSGtfO", "sqrt", "3270985HbPkNx", "pow", "27198XiFHCE", "readFileSync", "324457ZXtyri", "2112822cmldGr", "5570632nOFsPw", "1051317ljMdsa", "1258888Uoyzrk", "log", "split", "getElementById", "value", "innerHTML", "4fcGjxX", "output"];
  __STRING_ARRAY__ = function () {
    return _0x5ca636;
  };
  return __STRING_ARRAY__();
}
function debug(n) {
  var input = document.getElementById("input" + n)["value"];
  var ans = Main(input);
  var result = "WA";
  if (ans == document["getElementById"]("output" + n)["value"]["split"]("\n")[0]) {
    result = "AC";
  }
  document["getElementById"]("result" + n)["innerHTML"] = result;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
