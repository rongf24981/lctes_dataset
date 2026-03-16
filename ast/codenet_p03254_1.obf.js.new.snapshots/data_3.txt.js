function __STRING_ARRAY__() {
  var _0x493bb1 = ["366012DTeunM", "map", "438808TsaYrx", "6340880CfUjNL", "3YjnGQq", "58GRNAFk", "1856056ojJFpE", "33869280UTwhws", "utf8", "split", "log", "28954spOtCn", "279MjcZEY", "/dev/stdin", "6497127ZTlVdp"];
  __STRING_ARRAY__ = function () {
    return _0x493bb1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RVgFBC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 197;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RVgFBC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("58GRNAFk") / 1 * (parseInt("28954spOtCn") / 2) + parseInt("3YjnGQq") / 3 * (parseInt("1856056ojJFpE") / 4) + -parseInt("6340880CfUjNL") / 5 + -parseInt("366012DTeunM") / 6 + parseInt("6497127ZTlVdp") / 7 + parseInt("438808TsaYrx") / 8 * (-parseInt("279MjcZEY") / 9) + parseInt("33869280UTwhws") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 909878);
function Main(input) {
  input = input.split("\n");
  var N = Number(input[0]["split"](" ")[0]);
  var x = Number(input[0]["split"](" ")[1]);
  var a = input[1]["split"](" ")["map"](a => Number(a)).sort((a, b) => a - b);
  var match = 0;
  var left = 0;
  for (var i = 0; i < N; i++) {
    if (x - a[i] >= 0) {
      x = x - a[i];
      match++;
    } else {
      break;
    }
  }
  if (x > 0 && match != 0) {
    match--;
  }
  console["log"](match);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
