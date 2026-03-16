function __DECODE_0__(rLQOTD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 469;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rLQOTD, key);
}
function __STRING_ARRAY__() {
  var _0x3d00b1 = ["230632aNkOKU", "utf8", "Yes", "572027ptLEFa", "split", "end", "log", "stdin", "80844JOLtgo", "9077040tRMesw", "5562004JbRvfP", "54POhTZR", "setEncoding", "50526fsCFCE", "1583832EqpyRn", "245UQahQr", "198DJjSxe"];
  __STRING_ARRAY__ = function () {
    return _0x3d00b1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("572027ptLEFa") / 1 + -parseInt("1583832EqpyRn") / 2 + parseInt("54POhTZR") / 3 * (parseInt("80844JOLtgo") / 4) + parseInt("245UQahQr") / 5 * (parseInt("50526fsCFCE") / 6) + parseInt("5562004JbRvfP") / 7 + parseInt("230632aNkOKU") / 8 * (-parseInt("198DJjSxe") / 9) + parseInt("9077040tRMesw") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 480522);
process["stdin"].resume();
process.stdin["setEncoding"]("utf8");
var g_input = "";
process.stdin.on("data", function (chunk) {
  g_input += chunk;
});
process.stdin.on("end", function () {
  Main(g_input["split"](/\r?\n/));
});
function Main(input) {
  if (input[0][0] === "9" || input[0][1] === "9") {
    console["log"]("Yes");
  } else {
    console.log("No");
  }
  return 0;
}
