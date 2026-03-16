function __DECODE_0__(QehyHo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QehyHo, key);
}
function __STRING_ARRAY__() {
  var _0x432b4a = ["174700fyLYQx", "length", "map", "500076tqvCSC", "2484608AjWIKz", "sort", "116004Dadmbs", "push", "/dev/stdin", "6375btgrlP", "utf8", "679470xZTSrV", "756Rzbcjz", "reduce", "271380JwAgtm", "readFileSync", "36hJFdgo", "342fopPdV", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x432b4a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("500076tqvCSC") / 1 + -parseInt("679470xZTSrV") / 2 + parseInt("6375btgrlP") / 3 * (parseInt("756Rzbcjz") / 4) + -parseInt("271380JwAgtm") / 5 * (-parseInt("36hJFdgo") / 6) + parseInt("116004Dadmbs") / 7 + -parseInt("2484608AjWIKz") / 8 + parseInt("342fopPdV") / 9 * (parseInt("174700fyLYQx") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 257326);
function Main(input) {
  const M = input[0][1];
  const alist = input[1];
  const kumiList = alist["reduce"]((arr, ai, i) => {
    arr["push"](ai * 2);
    var kumiVal;
    for (var j = i + 1; j < alist["length"]; j++) {
      kumiVal = ai + alist[j];
      arr.push(kumiVal, kumiVal);
    }
    return arr;
  }, [])["sort"]((a1, a2) => a2 - a1);
  var answer = 0;
  for (var i = 0; i < M; i++) {
    answer += kumiList[i];
  }
  console.log(answer);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n")["map"](line => line.split(" ")["map"](Number)));
