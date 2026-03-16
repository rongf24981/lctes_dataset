function __STRING_ARRAY__() {
  var _0x4e95a7 = ["abs", "split", "3737237AgMIPu", "4911876nVkTxJ", "readFileSync", "14515200ISxpeX", "max", "/dev/stdin", "8FbUxNE", "length", "map", "3050490tmeUPd", "min", "18611vsNZRB", "861693YGVuZB", "8AmdWxM", "1673984qNnlxo", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4e95a7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("18611vsNZRB") / 1 * (-parseInt("8AmdWxM") / 2) + -parseInt("861693YGVuZB") / 3 + parseInt("1673984qNnlxo") / 4 + -parseInt("3050490tmeUPd") / 5 + -parseInt("4911876nVkTxJ") / 6 + parseInt("3737237AgMIPu") / 7 * (parseInt("8FbUxNE") / 8) + parseInt("14515200ISxpeX") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 774768);
function Main(input) {
  input = input["split"]("\n");
  if (input[input["length"] - 1] === "") {
    input.pop();
  }
  const N = input[0].split(" ")[0] - 0;
  const K = input[0].split(" ")[1] - 0;
  const x = input[1]["split"](" ")["map"](e => {
    return e - 0;
  });
  var pointer = x.findIndex(e => {
    return e => 0;
  }) - K;
  if (pointer < 0) {
    pointer = 0;
  }
  var temp;
  var ret = Infinity;
  for (var i = 0; i < K; i++) {
    if (pointer + i + K - 1 >= x.length) {
      break;
    }
    if (x[pointer + i] * x[pointer + i + K - 1] < 0) {
      temp = Math["min"](-x[pointer + i], x[pointer + i + K - 1]) - x[pointer + i] + x[pointer + i + K - 1];
    } else {
      temp = Math["max"](Math["abs"](x[pointer + i]), Math["abs"](x[pointer + i + K - 1]));
    }
    ret = Math["min"](ret, temp);
  }
  console["log"](ret);
}
function __DECODE_0__(BdVPvN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 330;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BdVPvN, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
