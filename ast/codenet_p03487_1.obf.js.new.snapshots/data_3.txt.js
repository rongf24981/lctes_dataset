(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1IjfXiR") / 1 * (-parseInt("88138XIPVnC") / 2) + parseInt("359643eWBnim") / 3 + parseInt("898192cVoxBT") / 4 + -parseInt("338120DbJDTw") / 5 + parseInt("723252xZGguD") / 6 + -parseInt("1557738xnrzBq") / 7 + -parseInt("53016HSvIRH") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 124117);
var lines = [];
var result = 0;
var readline = require("readline");
var rl = readline.createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines["push"](x);
});
function __DECODE_0__(kSheND, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 230;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kSheND, key);
}
function __STRING_ARRAY__() {
  var _0x4af309 = ["length", "1IjfXiR", "push", "sort", "split", "359643eWBnim", "338120DbJDTw", "stdout", "abs", "line", "88138XIPVnC", "1557738xnrzBq", "723252xZGguD", "map", "898192cVoxBT", "stdin", "53016HSvIRH", "min", "readline"];
  __STRING_ARRAY__ = function () {
    return _0x4af309;
  };
  return __STRING_ARRAY__();
}
rl.on("close", function () {
  var N = Number(lines[0]);
  var a = lines[1]["split"](" ")["map"](value => Number(value));
  a["sort"]((a, b) => a - b);
  var counter = Array(N).fill(0);
  var j = 0;
  counter[0] = [a[0], 1];
  for (var i = 1; i < N; i++) {
    if (a[i] !== a[i - 1]) {
      j++;
      counter[j] = [a[i], 1];
    } else {
      var cnt = counter[j][1] + 1;
      counter[j] = [a[i], cnt];
    }
  }
  for (var i = 0; i < counter["length"]; i++) {
    if (counter[i][0] === counter[i][1]) {
      continue;
    } else if (counter[i] === 0) {
      continue;
    } else {
      result += Math["min"](counter[i][1], Math["abs"](counter[i][0] - counter[i][1]));
    }
  }
  console.log(result);
});
