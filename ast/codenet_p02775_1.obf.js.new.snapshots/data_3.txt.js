function __DECODE_0__(RflYZd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 136;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RflYZd, key);
}
function __STRING_ARRAY__() {
  var _0x2be178 = ["log", "8jbFtGh", "/dev/stdin", "421924pEbYqp", "utf8", "readFileSync", "1520556fCYqcl", "5529678bqNQdo", "35qodVHt", "7274jBCdsI", "63HVBFIq", "121yXGfuD", "split", "2447550lyJUTB", "length", "55xYeuSN", "3752231JBKeNQ", "393090xHTLSE", "min"];
  __STRING_ARRAY__ = function () {
    return _0x2be178;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("35qodVHt") / 1 * (-parseInt("7274jBCdsI") / 2) + -parseInt("2447550lyJUTB") / 3 + -parseInt("421924pEbYqp") / 4 * (-parseInt("55xYeuSN") / 5) + parseInt("5529678bqNQdo") / 6 + parseInt("3752231JBKeNQ") / 7 * (parseInt("8jbFtGh") / 8) + parseInt("63HVBFIq") / 9 * (parseInt("393090xHTLSE") / 10) + parseInt("121yXGfuD") / 11 * (-parseInt("1520556fCYqcl") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 810702);
function Main(input) {
  input = input["split"]("\n");
  if (input[input.length - 1] === "") {
    input.pop();
  }
  const N = input[0];
  var up = 1;
  var down = 0;
  var nup;
  var ndown;
  for (var i = 0; i < N["length"]; i++) {
    nup = Math["min"](9 - N[i] + up, 1 + down + (N[i] - 0));
    ndown = Math.min(10 - N[i] + up, down + (N[i] - 0));
    up = nup;
    down = ndown;
  }
  console["log"](down);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
