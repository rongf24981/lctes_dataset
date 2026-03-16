(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1115575KFoLII") / 1 + parseInt("2kAeAbt") / 2 * (parseInt("908502qiuoQi") / 3) + -parseInt("4QHBoXJ") / 4 * (-parseInt("3046325FRmZBb") / 5) + parseInt("60wjpEeQ") / 6 * (-parseInt("700931VSoaAn") / 7) + -parseInt("5140040MFGVdv") / 8 + parseInt("4319613ijYXiL") / 9 + -parseInt("2991830BRPKGC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 564613);
function __DECODE_0__(eKbkzk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 426;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eKbkzk, key);
}
function Main(input) {
  input = input["split"]("\n");
  input = input[0];
  switch (input) {
    case "A":
      {
        console["log"]("T");
        return;
      }
    case "T":
      {
        console["log"]("A");
        return;
      }
    case "C":
      {
        console["log"]("G");
        return;
      }
    case "G":
      {
        console["log"]("C");
        return;
      }
    default:
      {
        return;
      }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x800e04 = ["60wjpEeQ", "2991830BRPKGC", "2kAeAbt", "5140040MFGVdv", "log", "908502qiuoQi", "split", "700931VSoaAn", "4QHBoXJ", "1115575KFoLII", "readFileSync", "3046325FRmZBb", "4319613ijYXiL"];
  __STRING_ARRAY__ = function () {
    return _0x800e04;
  };
  return __STRING_ARRAY__();
}
