(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1485630PROSUz") / 1 + -parseInt("4DwPbMr") / 2 * (-parseInt("636051gJEtIB") / 3) + -parseInt("123792lsSWVn") / 4 * (-parseInt("5RmNhDU") / 5) + -parseInt("43854MoAVKU") / 6 * (-parseInt("1435saPlVH") / 7) + parseInt("8nAfKrt") / 8 * (parseInt("1062333WGCpxz") / 9) + parseInt("14384260SARuQt") / 10 + -parseInt("45213047CKqXIE") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 885143);
function __DECODE_0__(XtwCYN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 392;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XtwCYN, key);
}
var lines = [];
var readline = require("readline");
function __STRING_ARRAY__() {
  var _0x25f137 = ["8nAfKrt", "push", "log", "sort", "5RmNhDU", "123792lsSWVn", "map", "1435saPlVH", "14384260SARuQt", "shift", "1062333WGCpxz", "43854MoAVKU", "line", "stdin", "readline", "1485630PROSUz", "4DwPbMr", "636051gJEtIB", "createInterface", "split", "45213047CKqXIE"];
  __STRING_ARRAY__ = function () {
    return _0x25f137;
  };
  return __STRING_ARRAY__();
}
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process.stdout
});
rl.on("line", x => {
  lines["push"](x);
});
var A;
rl.on("close", () => {
  var N = Number(lines[0].split(" ")[0]);
  var M = Number(lines[0]["split"](" ")[1]);
  A = lines[1]["split"](" ")["map"](i => Number(i));
  lines["shift"]();
  lines["shift"]();
  var BC = lines["map"](i => i["split"](" ")["map"](i => Number(i)));
  A["sort"]((a, b) => a - b);
  BC.sort((a, b) => b[1] - a[1]);
  var k = 0;
  var ans = 0;
  for (var i = 0; i < M; i++) {
    var b = BC[i][0];
    var c = BC[i][1];
    var cnt = 1;
    for (var j = k; j < N; j++) {
      if (b < cnt) {
        k = j;
        break;
      }
      if (A[j] < c) {
        ans += c;
      } else {
        for (var x = j; x < N; x++) {
          ans += A[x];
        }
        console.log(ans);
        return 0;
      }
      cnt++;
    }
  }
  for (var x = j; x < N; x++) {
    ans += A[x];
  }
  console["log"](ans);
});
