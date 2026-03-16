(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("529771lQEXFz") / 1 + -parseInt("498KsAukp") / 2 * (parseInt("4461cYqIdN") / 3) + -parseInt("2481320CxrBpc") / 4 + -parseInt("2596980mWlEIY") / 5 + parseInt("2080566EToYWt") / 6 + -parseInt("889ofCEbM") / 7 * (-parseInt("40168nXFZnf") / 8) + -parseInt("1662237gbRagn") / 9 * (-parseInt("20TEDHnZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 373596);
var input = "";
var mem = new Array(14);
for (var i = 0; i < 14; i++) {
  mem[i] = new Array(14);
  for (var j = 0; j < 14; j++) {
    mem[i][j] = 0;
  }
}
function __STRING_ARRAY__() {
  var _0x3d2926 = ["utf8", "2481320CxrBpc", "20TEDHnZ", "max", "log", "data", "889ofCEbM", "setEncoding", "split", "2080566EToYWt", "498KsAukp", "resume", "1662237gbRagn", "40168nXFZnf", "stdin", "529771lQEXFz", "4461cYqIdN", "end", "2596980mWlEIY", "length"];
  __STRING_ARRAY__ = function () {
    return _0x3d2926;
  };
  return __STRING_ARRAY__();
}
var dx = [[0, -1, 0, 1, 0], [-1, 0, 1, -1, 0, 1, -1, 0, 1], [0, -1, 0, -1, -2, -1, 0, 1, 2, -1, 0, 1, 0]];
var dy = [[-1, 0, 0, 0, 1], [-1, -1, -1, 0, 0, 0, 1, 1, 1], [-2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2]];
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
process.stdin.on("data", function (chunk) {
  input += chunk;
});
function __DECODE_0__(qCjyxu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 336;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qCjyxu, key);
}
process["stdin"].on("end", function () {
  input = input["split"]("\n");
  for (var i = 0; i < input["length"]; i++) {
    s = input[i]["split"](",");
    x = Number(s[0]) + 2;
    y = Number(s[1]) + 2;
    v = Number(s[2]) - 1;
    for (var j in dx[v]) {
      mem[x + dx[v][j]][y + dy[v][j]]++;
    }
  }
  m = 0;
  b = 0;
  for (var i = 2; i < 12; i++) {
    for (var j = 2; j < 12; j++) {
      if (mem[i][j] == 0) {
        b++;
      }
      m = Math["max"](m, mem[i][j]);
    }
  }
  console["log"](b);
  console.log(m);
});
