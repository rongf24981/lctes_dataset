(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("27DkzlXi") / 1 * (parseInt("92126UaacyY") / 2) + parseInt("1271361xCfybW") / 3 * (parseInt("12RYwrCy") / 4) + -parseInt("3340610uAlCKa") / 5 + parseInt("855384bkYpZU") / 6 + parseInt("8415547qBKLgF") / 7 * (-parseInt("8QPYZOf") / 8) + parseInt("263583iurQZN") / 9 * (parseInt("190WzDhsz") / 10) + -parseInt("7713343zSkhwP") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 642523);
function __DECODE_0__(WGvsFm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 253;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WGvsFm, key);
}
function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0]["split"](" ")[0]);
  var K = parseInt(input[0]["split"](" ")[1]);
  var anssub = new Array();
  var mod = Math["pow"](10, 9) + 7;
  for (var i = 1; i <= K; i++) {
    var a = combination(N - K + 1, i) % mod;
    var b = combination(K - 1, i - 1) % mod;
    var c = a * b % mod;
    anssub["push"](c);
  }
  var ans = anssub.join("\n");
  console.log("%s", ans);
  return ans;
}
function permutation(n, r) {
  for (var i = 0, res = 1; i < r; i++) {
    res *= n - i;
  }
  return res;
}
function __STRING_ARRAY__() {
  var _0xa93879 = ["7713343zSkhwP", "92126UaacyY", "result", "27DkzlXi", "8415547qBKLgF", "utf8", "855384bkYpZU", "input", "1271361xCfybW", "push", "getElementById", "split", "output", "12RYwrCy", "3340610uAlCKa", "value", "/dev/stdin", "readFileSync", "8QPYZOf", "263583iurQZN", "innerHTML", "190WzDhsz", "pow"];
  __STRING_ARRAY__ = function () {
    return _0xa93879;
  };
  return __STRING_ARRAY__();
}
function combination(n, r) {
  return permutation(n, r) / permutation(r, r);
}
function debug(n) {
  var input = document.getElementById("input" + n)["value"];
  var ans = Main(input);
  var result = "WA";
  if (ans == document["getElementById"]("output" + n)["value"].split("\n")[0]) {
    result = "AC";
  }
  document["getElementById"]("result" + n)["innerHTML"] = result;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
