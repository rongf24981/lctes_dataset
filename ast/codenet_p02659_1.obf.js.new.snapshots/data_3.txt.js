(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3IFybmO") / 1 * (parseInt("145922gsrdeU") / 2) + -parseInt("1334124XoeAGi") / 3 + -parseInt("864484HkacMi") / 4 + -parseInt("55weUBHC") / 5 * (-parseInt("279486sEyrWd") / 6) + -parseInt("5048547xcvQaR") / 7 * (parseInt("8ZhhvWc") / 8) + -parseInt("1501677lNXvXQ") / 9 + -parseInt("10kLBgKM") / 10 * (-parseInt("20951381UJTxXT") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 649276);
function __STRING_ARRAY__() {
  var _0x25d629 = ["log", "floor", "getElementById", "55weUBHC", "split", "10kLBgKM", "1501677lNXvXQ", "20951381UJTxXT", "output", "864484HkacMi", "145922gsrdeU", "279486sEyrWd", "innerHTML", "3IFybmO", "utf8", "result", "value", "input", "1334124XoeAGi", "5048547xcvQaR", "8ZhhvWc", "toString"];
  __STRING_ARRAY__ = function () {
    return _0x25d629;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var A = Number(input[0]["split"](" ")[0]);
  var B = Number(input[0]["split"](" ")[1]);
  var ans = BigInt(Math["floor"](A * B));
  var ans = ans["toString"]();
  console["log"]("%s", ans);
  return ans;
}
function debug(n) {
  var input = document["getElementById"]("input" + n)["value"];
  var ans = Main(input);
  var result = "WA";
  if (ans == document["getElementById"]("output" + n).value["split"]("\n")[0]) {
    result = "AC";
  }
  document["getElementById"]("result" + n)["innerHTML"] = result;
}
function __DECODE_0__(ABVxKR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 148;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ABVxKR, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
