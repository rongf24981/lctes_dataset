(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("20389tKCIFQ") / 1 * (-parseInt("14iacGSR") / 2) + -parseInt("542262UXRppn") / 3 + -parseInt("20iujpOQ") / 4 * (parseInt("55425qZHCLg") / 5) + parseInt("486VOcMvy") / 6 * (parseInt("8057AvTVRv") / 7) + parseInt("1003944WJdPpI") / 8 + -parseInt("1405773rEazSi") / 9 + -parseInt("1490qFJBLk") / 10 * (-parseInt("10120BaEbjq") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 106151);
function __STRING_ARRAY__() {
  var _0x403690 = ["1490qFJBLk", "map", "push", "1003944WJdPpI", "542262UXRppn", "split", "/dev/stdin", "utf8", "readFileSync", "10120BaEbjq", "1405773rEazSi", "14iacGSR", "8057AvTVRv", "20iujpOQ", "486VOcMvy", "55425qZHCLg", "20389tKCIFQ"];
  __STRING_ARRAY__ = function () {
    return _0x403690;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  const N = parseInt(input[0], 10);
  var x = [];
  var y = [];
  for (var i = 1; i <= N; i++) {
    tmp = input[i]["split"](" ")["map"](n => parseInt(n, 10));
    x["push"](tmp[0]);
    y.push(tmp[1]);
  }
  var counts = [];
  for (var j = 0; j < N; j++) {
    var count = 0;
    for (var k = 0; k < N; k++) {
      if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
        count++;
      }
    }
    counts["push"](parseInt(count, 10));
  }
  for (var j = 0; j < N; j++) {
    var count = 1;
    for (var k = 0; k < N; k++) {
      if (x[j] > x[k] && y[j] > y[k] || x[j] < x[k] && y[j] < y[k]) {
        count = count + counts[k];
      }
    }
    console.log(count);
  }
}
function __DECODE_0__(icWPKf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 433;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(icWPKf, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
