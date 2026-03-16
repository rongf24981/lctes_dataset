function __DECODE_0__(ySqRCL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 168;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ySqRCL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("824722tfRRxX") / 1 * (-parseInt("2YwYWJW") / 2) + parseInt("1913721BTeCTo") / 3 + parseInt("169256KSmIUT") / 4 + -parseInt("2649370GaipGm") / 5 + -parseInt("6510384AEfZXq") / 6 + parseInt("99505vNaFEW") / 7 * (parseInt("16RfFrOz") / 8) + parseInt("20835279NvQxby") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 584022);
function Main(input) {
  input = input["split"]("\n");
  var mem = input[0]["split"](" ")["map"](Number);
  var sum = 0;
  for (var i = 1; i < input["length"]; i++) {
    var n = input[i].split(" ")["map"](Number);
    if (n[0] >= mem[1] && n[1] >= mem[2]) {
      sum++;
    }
  }
  console["log"](sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
function __STRING_ARRAY__() {
  var _0x5e2cde = ["169256KSmIUT", "log", "2649370GaipGm", "824722tfRRxX", "length", "6510384AEfZXq", "trim", "2YwYWJW", "99505vNaFEW", "20835279NvQxby", "1913721BTeCTo", "16RfFrOz", "map", "/dev/stdin", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5e2cde;
  };
  return __STRING_ARRAY__();
}
