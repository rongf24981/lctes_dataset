function __DECODE_0__(KQsWlP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 385;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KQsWlP, key);
}
function __STRING_ARRAY__() {
  var _0x359d6b = ["335OfBmIc", "map", "pow", "145551xFIHwL", "1552649JXGIMm", "/dev/stdin", "9TcWqMP", "8uXXPcA", "log", "forEach", "split", "1367692flmluC", "utf8", "3911121meinHl", "137118UMszRt", "23688JNmROl", "4891890PxHILQ"];
  __STRING_ARRAY__ = function () {
    return _0x359d6b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("145551xFIHwL") / 1 + -parseInt("137118UMszRt") / 2 * (parseInt("9TcWqMP") / 3) + -parseInt("1367692flmluC") / 4 + -parseInt("335OfBmIc") / 5 * (-parseInt("23688JNmROl") / 6) + -parseInt("1552649JXGIMm") / 7 + parseInt("8uXXPcA") / 8 * (parseInt("3911121meinHl") / 9) + parseInt("4891890PxHILQ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 273316);
function Main(input) {
  input = input["split"]("\n");
  var n = Math["pow"](3, input[0]);
  var sum = 1;
  var arr = input[1]["split"](" ")["map"](Number);
  arr["forEach"](function (val) {
    if (val % 2 == 0) {
      sum *= 2;
    }
  });
  console["log"](n - sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
